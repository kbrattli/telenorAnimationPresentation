import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, padding: 20, gap: 10 }}>
      <TouchableOpacity
        onPress={() => router.push("/examples/example1")}
        style={{
          backgroundColor: "white",
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderRadius: 10,
          borderColor: "lightgray",
          borderWidth: 1,
        }}
      >
        <Text>React Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
