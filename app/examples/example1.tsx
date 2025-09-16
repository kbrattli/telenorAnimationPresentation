import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

function Button() {
    const scale = useSharedValue(1); // Lives on both JS and UI thread

    // Animated style that updates on UI thread
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const onPressIn = () => {
        // Update scale gradually to 2 on UI thread
        scale.value = withTiming(2);
    };

    const onPressOut = () => {
        scale.value = withTiming(1);
    };

    return (
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
            {/* View that supports updating its style on the UI thread */}
            <Animated.View style={[styles.button, animatedStyle]} />
        </Pressable>
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
                }}
            >
                Reanimated Animation
            </Text>
            <Button />
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
