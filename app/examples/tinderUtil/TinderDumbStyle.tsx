import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const TinderHeader = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                gap: 10,
                marginTop: 50,
                padding: 10,
                alignItems: "center",
            }}
        >
            <MaterialCommunityIcons
                name="tune-variant"
                size={25}
                color="white"
            />
            <View
                style={{
                    borderRadius: 20,
                    borderWidth: 3,
                    padding: 8,
                    borderColor: "white",
                }}
            >
                <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 14 }}
                >
                    For deg
                </Text>
            </View>
            <View
                style={{
                    borderRadius: 20,
                    borderWidth: 3,
                    padding: 8,
                    borderColor: "#42474B",
                }}
            >
                <Text style={{ color: "#BABFC3", fontWeight: "bold" }}>
                    Dobbeldate
                </Text>
            </View>
        </View>
    );
};
