import tinderImage1 from "@/assets/tinderPhotos/1.jpeg";
import tinderImage2 from "@/assets/tinderPhotos/2.jpeg";
import tinderImage4 from "@/assets/tinderPhotos/4.webp";

import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const tinderPhotos = [tinderImage1, tinderImage2, tinderImage4];

const { width } = Dimensions.get("window");

function TinderCard({
    photo,
    activeCard,
}: {
    photo: any;
    activeCard: boolean;
}) {
    // Only the last card is draggable

    const positionX = useSharedValue(0);
    const positionY = useSharedValue(0);
    const rotation = useSharedValue(0);

    const gesture = Gesture.Pan()
        .onUpdate((e) => {
            "worklet";
            if (activeCard) {
                positionX.value = e.translationX;
                positionY.value = e.translationY;
                rotation.value = e.translationX / 300;
            }
        })
        .onEnd(() => {
            if (activeCard) {
                const distance = Math.sqrt(
                    positionX.value ** 2 + positionY.value ** 2
                );
                if (distance < width / 2) {
                    // Return to center
                    positionX.value = withTiming(0);
                    positionY.value = withTiming(0);
                    rotation.value = withTiming(0);
                } else {
                    // Swipe off screen
                    const direction = positionX.value > 0 ? 1 : -1;
                    positionX.value = direction * width * 1.5;
                    positionY.value += direction * 100;
                }
            }
        });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: positionX.value },
                { translateY: positionY.value },
                { rotateZ: `${rotation.value}rad` },
            ],
        };
    });

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View
                style={[
                    {
                        flex: 1,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                    },
                    animatedStyle,
                ]}
            >
                <Image
                    source={photo}
                    style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                    }}
                />
            </Animated.View>
        </GestureDetector>
    );
}

function Tinder() {
    return (
        <View style={{ flex: 1 }}>
            {tinderPhotos.map((photo, index) => (
                <TinderCard
                    key={index}
                    photo={photo}
                    activeCard={index === tinderPhotos.length - 1}
                />
            ))}
        </View>
    );
}

export default function Screen1() {
    return (
        <View style={styles.container}>
            <Tinder />
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
    },
});
