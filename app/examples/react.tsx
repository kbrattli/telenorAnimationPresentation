import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Pressable } from "react-native-gesture-handler";

function Example() {
    const [scale, setScale] = useState(1);

    const onPressIn = () => {
        setScale(2);
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
            <Example />
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
        justifyContent: "center",
        alignItems: "center",
    },
});
