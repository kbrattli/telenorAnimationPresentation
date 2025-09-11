import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
const HomeScreen = () => {
    const router = useRouter();
    const examples = [
        { id: "example1", title: "Basic Animation" },
        { id: "example2", title: "Slider Animation" },
    ];
    const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

    const toggleChecked = (id: string) => {
        setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <View
            style={{
                flex: 1,
                padding: 20,
                gap: 10,
                backgroundColor: "#F7F8FA",
            }}
        >
            {examples.map((example) => {
                const isChecked = checked[example.id];
                return (
                    <View
                        key={example.id}
                        style={{
                            flexDirection: "row",
                            gap: 10,
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() =>
                                router.push(`/examples/${example.id}`)
                            }
                            style={{
                                backgroundColor: "white",
                                paddingHorizontal: 15,
                                paddingVertical: 15,
                                borderRadius: 10,
                                borderColor: "lightgray",
                                borderWidth: 1,
                                // @ts-ignore
                                boxShadow: "0 2px 7px rgba(0,0,0,0.1)",
                                flex: 1,
                                opacity: isChecked ? 0.5 : 1,
                            }}
                            disabled={isChecked}
                        >
                            <Text
                                style={{
                                    fontWeight: "semibold",
                                    color: isChecked ? "gray" : "black",
                                }}
                            >
                                {example.title}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => toggleChecked(example.id)}
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: isChecked ? "#007AFF" : "gray",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: isChecked
                                    ? "#007AFF"
                                    : "white",
                            }}
                        >
                            {isChecked ? (
                                <Text
                                    style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: 18,
                                    }}
                                >
                                    ✓
                                </Text>
                            ) : null}
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
};

export default HomeScreen;
