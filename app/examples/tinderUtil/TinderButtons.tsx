import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const rejectColor = "#E34286";
const likeColor = "#86CA53";
const circleColor = "#23282C";

export const TinderButtons = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
                position: "absolute",
                bottom: 17,
            }}
        >
            <View style={styles.circle}>
                <Entypo name="cross" size={50} color={rejectColor} />
            </View>
            <View style={styles.circle}>
                <Entypo name="heart" size={50} color={likeColor} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    circle: {
        backgroundColor: circleColor,
        borderRadius: 50,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
