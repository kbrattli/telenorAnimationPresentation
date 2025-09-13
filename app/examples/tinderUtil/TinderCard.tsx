import { LinearGradient } from "expo-linear-gradient";
import type { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type TinderCardProps = {
    photo: any;
};

export const TinderCard: FC<TinderCardProps> = ({ photo }) => {
    return (
        <View style={styles.card}>
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
        </View>
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
});
