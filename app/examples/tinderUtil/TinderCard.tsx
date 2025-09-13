import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import type { FC } from "react";
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { usePosition } from "../tinder";

const { width } = Dimensions.get("window");
const likeColor = "#86CA53";
const rejectColor = "#E34286";

type TinderCardProps = {
    photo: any;
};

export const TinderCard: FC<TinderCardProps> = ({ photo }) => {
    const { UniversalPositionX } = usePosition();
    const positionX = useSharedValue(0);
    const positionY = useSharedValue(0);
    const [isUnmounted, setIsUnmounted] = useState(false);

    const animatedSwipeStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: positionX.value },
                { translateY: positionY.value },
                { rotate: `${-positionX.value / 25}deg` },
            ],
        };
    });

    const animatedHeartStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            positionX.value,
            [20, 30],
            [0, 1],
            Extrapolation.CLAMP
        );
        return {
            opacity: opacity,
        };
    });

    const animatedCrossStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            positionX.value,
            [-30, -20],
            [1, 0],
            Extrapolation.CLAMP
        );
        return { opacity };
    });

    const gesture = Gesture.Pan()
        .onStart(() => {
            UniversalPositionX.value = 0;
        })
        .onUpdate((e) => {
            UniversalPositionX.value = e.translationX;
            positionX.value = e.translationX;
            positionY.value = e.translationY;
        })
        .onEnd((event) => {
            const velocity = event.velocityX;
            const direction = Math.sign(velocity);
            UniversalPositionX.value = withTiming(0, { duration: 100 });
            if (Math.abs(velocity) > 500) {
                positionX.value = withTiming(
                    direction * (width + 100),
                    undefined, // Default duration
                    (finished) => {
                        if (finished) {
                            scheduleOnRN(setIsUnmounted, true);
                        }
                    }
                );
            } else {
                positionX.value = withTiming(0);
                positionY.value = withTiming(0);
            }
        });

    if (isUnmounted) {
        return null;
    }

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.card, animatedSwipeStyle]}>
                <Image source={photo} style={styles.image} />
                <LinearGradient
                    colors={["transparent", "transparent", "rgba(0,0,0,1)"]}
                    locations={[0, 0.6, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.bottomGradient}
                />

                <View style={styles.meta}>
                    <Text style={styles.name}>Kenneth 24</Text>
                    <Text style={styles.distance}>5 meter unna</Text>
                </View>
                <TopBar />
                <Animated.View style={[styles.heart, animatedHeartStyle]}>
                    <Entypo name="heart" size={120} color={likeColor} />
                </Animated.View>
                <Animated.View style={[styles.cross, animatedCrossStyle]}>
                    <Entypo name="cross" size={120} color={rejectColor} />
                </Animated.View>
            </Animated.View>
        </GestureDetector>
    );
};

const TopBar = () => {
    return (
        <View style={styles.topBar}>
            <View style={[styles.segment, styles.segmentActive]} />
            <View style={styles.segment} />
            <View style={styles.segment} />
            <View style={styles.segment} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        position: "absolute",
        width: "100%",
        height: "95%",
        overflow: "hidden",
        backgroundColor: "black",
    },
    image: {
        position: "absolute",
        width: "100%",
        height: "90%",
        resizeMode: "cover",
    },
    bottomGradient: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 50,
        height: "40%",
    },
    meta: {
        position: "absolute",
        left: 16,
        right: 16,
        bottom: 70,
        gap: 6,
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
    },
    distance: {
        color: "white",
        fontSize: 16,
    },
    topBar: {
        position: "absolute",
        top: 10,
        left: 10,
        right: 10,
        flexDirection: "row",
        gap: 3,
    },
    segment: {
        height: 4,
        flex: 1,
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,0.3)",
    },
    segmentActive: {
        backgroundColor: "white",
    },
    heart: {
        position: "absolute",
        top: 50,
        left: 20,
        transform: [{ rotate: "-20deg" }],
    },
    cross: {
        position: "absolute",
        top: 50,
        right: 20,
        transform: [{ rotate: "20deg" }],
    },
});
