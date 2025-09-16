import { StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

function DraggableButton() {
    const positionX = useSharedValue(0); // Lives on both threads
    const positionY = useSharedValue(0);

    // Animated style that updates on UI thread
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: positionX.value },
            { translateY: positionY.value },
        ],
    }));

    // Gesture that does not involve JS thread at all
    const gesture = Gesture.Pan()
        .onUpdate((event) => {
            positionX.value = event.translationX;
            positionY.value = event.translationY;
        })
        .onEnd(() => {
            positionX.value = withSpring(0);
            positionY.value = withSpring(0);
        });

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.button, animatedStyle]} />
        </GestureDetector>
    );
}

export default function Screen1() {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    position: "absolute",
                    top: 50,
                    padding: 20,
                    textAlign: "center",
                }}
            >
                Draggable button with Reanimated + Gesture Handler
            </Text>
            <DraggableButton />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: "#3b82f6",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
