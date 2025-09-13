import { Entypo } from "@expo/vector-icons";

import { StyleSheet, View } from "react-native";

import Animated, {
    useAnimatedStyle,
    useDerivedValue,
    withTiming,
} from "react-native-reanimated";

import { usePosition } from "../tinder";

const rejectColor = "#E34286";
const likeColor = "#86CA53";
const circleColor = "#23282C";

const AnimatedEntypo = Animated.createAnimatedComponent(Entypo);

export const TinderButtons = () => {
    const { UniversalPositionX } = usePosition();

    const likeCircleScale = useDerivedValue(() => {
        return UniversalPositionX.value >= 0
            ? withTiming(1, { duration: 100 })
            : withTiming(0, { duration: 100 });
    }, [UniversalPositionX]);

    const rejectCircleScale = useDerivedValue(() => {
        return UniversalPositionX.value <= 0
            ? withTiming(1, { duration: 100 })
            : withTiming(0, { duration: 100 });
    }, [UniversalPositionX]);

    const likeHeartScale = useDerivedValue(() => {
        return UniversalPositionX.value > 0
            ? withTiming(5, { duration: 300 })
            : withTiming(1, { duration: 200 });
    }, [UniversalPositionX]);

    const rejectCrossScale = useDerivedValue(() => {
        return UniversalPositionX.value < 0
            ? withTiming(10, { duration: 300 })
            : withTiming(1, { duration: 200 });
    }, [UniversalPositionX]);

    const likeBackgroundScale = useDerivedValue(() => {
        return UniversalPositionX.value > 0
            ? withTiming(1, { duration: 300 })
            : withTiming(0, { duration: 200 });
    }, [UniversalPositionX]);

    const rejectBackgroundScale = useDerivedValue(() => {
        return UniversalPositionX.value < 0
            ? withTiming(1, { duration: 300 })
            : withTiming(0, { duration: 200 });
    }, [UniversalPositionX]);

    const animatedLikeCircleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: likeCircleScale.value }],
        };
    });

    const animatedRejectCircleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: rejectCircleScale.value }],
        };
    });

    const animatedHeartStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: likeHeartScale.value }],
        };
    });

    const animatedCrossStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: rejectCrossScale.value }],
        };
    });

    const animatedHeartBackgroundStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: likeBackgroundScale.value }],
        };
    });

    const animatedCrossBackgroundStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: rejectBackgroundScale.value }],
        };
    });

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
                position: "absolute",
                bottom: 0,
            }}
        >
            <Animated.View style={[styles.circle, animatedRejectCircleStyle]}>
                <AnimatedEntypo
                    name="cross"
                    size={50}
                    color={rejectColor}
                    style={[styles.icon, animatedCrossStyle]}
                />

                <AnimatedEntypo
                    name="cross"
                    size={50}
                    color={circleColor}
                    style={[styles.icon, animatedCrossBackgroundStyle]}
                />
            </Animated.View>

            <Animated.View style={[styles.circle, animatedLikeCircleStyle]}>
                <AnimatedEntypo
                    name="heart"
                    size={50}
                    color={likeColor}
                    style={[styles.icon, animatedHeartStyle]}
                />

                <AnimatedEntypo
                    name="heart"
                    size={50}
                    color={circleColor}
                    style={[styles.icon, animatedHeartBackgroundStyle]}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    circle: {
        position: "relative",
        width: 70,
        height: 70,
        backgroundColor: circleColor,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    icon: {
        position: "absolute",
    },
});
