import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";

function Example() {
    const positionX = useSharedValue(0);
    const positionY = useSharedValue(0);

    const startX = useSharedValue(0);
    const startY = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: positionX.value },
            { translateY: positionY.value },
        ],
    }));

    const gesture = Gesture.Pan()
        .onStart(() => {
            startX.value = positionX.value;
            startY.value = positionY.value;
        })
        .onUpdate((event) => {
            positionX.value = startX.value + event.translationX;
            positionY.value = startY.value + event.translationY;
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
            <Example />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#3b82f6",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
