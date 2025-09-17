import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Animated, {
    DerivedValue,
    useAnimatedStyle,
    useDerivedValue,
    withTiming,
} from "react-native-reanimated";

import { usePosition } from "../tinder";

const rejectColor = "#E34286";
const likeColor = "#86CA53";
const circleColor = "#23282C";

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
            <RejectCircle
                circleScale={rejectCircleScale}
                crossScale={rejectCrossScale}
                backgroundScale={rejectBackgroundScale}
            />

            <LikeCircle
                circleScale={likeCircleScale}
                heartScale={likeHeartScale}
                backgroundScale={likeBackgroundScale}
            />
        </View>
    );
};

const AnimatedCross = ({
    crossScale,
    backgroundScale,
}: {
    crossScale: DerivedValue<any>;
    backgroundScale: DerivedValue<any>;
}) => {
    const animatedCrossStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: crossScale.value }],
        };
    });

    const animatedCrossBackgroundStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: backgroundScale.value }],
        };
    });

    return (
        <>
            <Animated.View style={[styles.icon, animatedCrossStyle]}>
                <Entypo name="cross" size={50} color={rejectColor} />
            </Animated.View>
            <Animated.View style={[styles.icon, animatedCrossBackgroundStyle]}>
                <Entypo name="cross" size={50} color={circleColor} />
            </Animated.View>
        </>
    );
};

const AnimatedHeart = ({
    heartScale,
    backgroundScale,
}: {
    heartScale: DerivedValue<any>;
    backgroundScale: DerivedValue<any>;
}) => {
    const animatedHeartStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: heartScale.value }],
        };
    });

    const animatedHeartBackgroundStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: backgroundScale.value }],
        };
    });

    return (
        <>
            <Animated.View style={[styles.icon, animatedHeartStyle]}>
                <Entypo name="heart" size={50} color={likeColor} />
            </Animated.View>
            <Animated.View style={[styles.icon, animatedHeartBackgroundStyle]}>
                <Entypo name="heart" size={50} color={circleColor} />
            </Animated.View>
        </>
    );
};

const RejectCircle = ({
    circleScale,
    crossScale,
    backgroundScale,
}: {
    circleScale: DerivedValue<any>;
    crossScale: DerivedValue<any>;
    backgroundScale: DerivedValue<any>;
}) => {
    const animatedRejectCircleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: circleScale.value }],
        };
    });

    return (
        <Animated.View style={[styles.circle, animatedRejectCircleStyle]}>
            <AnimatedCross
                crossScale={crossScale}
                backgroundScale={backgroundScale}
            />
        </Animated.View>
    );
};

const LikeCircle = ({
    circleScale,
    heartScale,
    backgroundScale,
}: {
    circleScale: DerivedValue<any>;
    heartScale: DerivedValue<any>;
    backgroundScale: DerivedValue<any>;
}) => {
    const animatedLikeCircleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: circleScale.value }],
        };
    });

    return (
        <Animated.View style={[styles.circle, animatedLikeCircleStyle]}>
            <AnimatedHeart
                heartScale={heartScale}
                backgroundScale={backgroundScale}
            />
        </Animated.View>
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
