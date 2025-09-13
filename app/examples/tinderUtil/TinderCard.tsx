import type { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

type TinderCardProps = {
    photo: any;
};

export const TinderCard: FC<TinderCardProps> = ({ photo }) => {
    return (
        <View style={styles.card}>
            <Image source={photo} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
});
