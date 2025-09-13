import tinderImage1 from "@/assets/tinderPhotos/1.jpeg";
import tinderImage2 from "@/assets/tinderPhotos/2.jpeg";
import tinderImage4 from "@/assets/tinderPhotos/4.webp";
import React, { createContext, useContext, type ReactNode } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useSharedValue, type SharedValue } from "react-native-reanimated";
import { TinderButtons } from "./tinderUtil/TinderButtons";
import { TinderCard } from "./tinderUtil/TinderCard";
import { TinderHeader } from "./tinderUtil/TinderDumbStyle";
import { TinderTabMenu } from "./tinderUtil/TinderTabMenu";

const tinderPhotos = [tinderImage1, tinderImage2, tinderImage4];

const { width, height } = Dimensions.get("window");
const backgroundColorTinder = "#131218";

// Position Context
type PositionContextType = {
    UniversalPositionX: SharedValue<number>;
};

const PositionContext = createContext<PositionContextType | null>(null);

export const usePosition = () => {
    const context = useContext(PositionContext);
    if (!context) {
        throw new Error("usePosition must be used within a PositionProvider");
    }
    return context;
};

const PositionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const UniversalPositionX = useSharedValue(0);

    return (
        <PositionContext.Provider value={{ UniversalPositionX }}>
            {children}
        </PositionContext.Provider>
    );
};

export default function Screen() {
    return (
        <PositionProvider>
            <View style={styles.container}>
                <TinderHeader />
                <View
                    style={{
                        position: "relative",
                        height: height * 0.65,
                    }}
                >
                    <TinderCard photo={tinderPhotos[0]} />
                    <TinderCard photo={tinderPhotos[1]} />
                    <TinderCard photo={tinderPhotos[2]} />
                    <TinderCard photo={tinderPhotos[0]} />
                    <TinderCard photo={tinderPhotos[1]} />
                    <TinderCard photo={tinderPhotos[2]} />
                    <TinderCard photo={tinderPhotos[0]} />
                    <TinderCard photo={tinderPhotos[1]} />
                    <TinderCard photo={tinderPhotos[2]} />

                    <TinderButtons />
                </View>
                <TinderTabMenu />
            </View>
        </PositionProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColorTinder,
    },
});
