import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

export default function Example() {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const tap = Gesture.Tap()
        .onBegin(() => {
            "worklet";
            scale.value = withTiming(2);
        })
        .onFinalize(() => {
            "worklet";
            scale.value = withTiming(1);
        });

    return (
        <>
            <Stack.Screen options={{ title: "Basic example" }} />
            <View style={styles.container}>
                <GestureDetector gesture={tap}>
                    <Animated.View style={[styles.button, animatedStyle]} />
                </GestureDetector>
            </View>
        </>
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
