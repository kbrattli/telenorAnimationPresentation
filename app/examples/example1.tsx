import { StyleSheet, View } from "react-native";
import { Pressable } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

function Example() {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const onPressIn = () => {
        scale.value = withTiming(2);
    };

    const onPressOut = () => {
        scale.value = withTiming(1);
    };

    return (
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
            <Animated.View style={[styles.button, animatedStyle]} />
        </Pressable>
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
        borderRadius: 20,
        backgroundColor: "#3b82f6",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
