import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native-gesture-handler";

function Button() {
    const [scale, setScale] = useState(1); // Lives only in JS thread

    const onPressIn = () => {
        setScale(2); // Update scale to 2 on JS thread and trigger re-render
    };

    const onPressOut = () => {
        setScale(1);
    };

    return (
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
            <View style={[styles.button, { transform: [{ scale }] }]} />
        </Pressable>
    );
}

export default function Screen1() {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    position: "absolute",
                    top: 50,
                }}
            >
                React Animation
            </Text>
            <Button />
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
        gap: 100,
        justifyContent: "center",
        alignItems: "center",
    },
});
