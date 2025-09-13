import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, View } from "react-native";

export const TinderTabMenu = () => {
    return (
        <View>
            <View
                style={{
                    alignItems: "center",
                    padding: 10,
                    gap: 10,
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                <View style={{ alignItems: "center", gap: 3 }}>
                    <Ionicons name="flame" size={24} color="#E64D62" />

                    <Text style={{ color: "white" }}>Hjem</Text>
                </View>
                <View style={{ alignItems: "center", gap: 3 }}>
                    <MaterialIcons name="explore" size={24} color="#818493" />

                    <Text style={{ color: "#818493" }}>Utforsk</Text>
                </View>
                <View style={{ alignItems: "center", gap: 3 }}>
                    <Entypo name="heart-outlined" size={24} color="#818493" />
                    <Text style={{ color: "#818493" }}>Likes</Text>
                </View>
                <View style={{ alignItems: "center", gap: 3 }}>
                    <FontAwesome6 name="user" size={24} color="#818493" />
                    <Text style={{ color: "#818493" }}>Profil</Text>
                </View>
            </View>
        </View>
    );
};
