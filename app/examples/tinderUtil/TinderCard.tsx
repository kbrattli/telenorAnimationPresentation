import type { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type TinderCardProps = {
    photo: any;
};

export const TinderCard: FC<TinderCardProps> = ({ photo }) => {
    return (
        <View style={styles.card}>
            <View style={{ flex: 1, position: "relative" }}>
                <Image source={photo} style={styles.image} />
                <View
                    style={{
                        position: "absolute",
                        bottom: 50,
                        left: 10,
                        right: 0,
                        padding: 10,
                        gap: 5,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 24,
                        }}
                    >
                        {"Kenneth  24"}
                    </Text>
                    <Text style={{ color: "white", fontSize: 18 }}>
                        {"5 meter unna"}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        position: "absolute",
        width: "100%",
        height: "90%",
        justifyContent: "center",
        overflow: "hidden",
    },
    image: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
});
