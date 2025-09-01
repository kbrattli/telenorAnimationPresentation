import { Stack } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Example1 = () => {
    const scale = useSharedValue(1);

    const AnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const ChangeScale = (scaleTo: number) => {
        scale.value = withTiming(scaleTo);
    };

    return (
        <>
            <Stack.Screen options={{ title: "Basic example" }} />
            <View style={styles.container}>
                <AnimatedPressable
                    onPressIn={() => ChangeScale(2)}
                    onPressOut={() => ChangeScale(1)}
                    style={[styles.button, AnimatedStyle]}
                />
            </View>
        </>
    );
};

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

export default Example1;
