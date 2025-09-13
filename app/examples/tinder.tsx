import tinderImage1 from "@/assets/tinderPhotos/1.jpeg";
import tinderImage2 from "@/assets/tinderPhotos/2.jpeg";
import tinderImage4 from "@/assets/tinderPhotos/4.webp";
import { Dimensions, StyleSheet, View } from "react-native";
import { TinderButtons } from "./tinderUtil/TinderButtons";
import { TinderCard } from "./tinderUtil/TinderCard";
import { TinderHeader } from "./tinderUtil/TinderDumbStyle";

const tinderPhotos = [tinderImage1, tinderImage2, tinderImage4];

const { width, height } = Dimensions.get("window");
const backgroundColorTinder = "#131218";

export default function Screen() {
    return (
        <View style={styles.container}>
            <TinderHeader />
            <View
                style={{
                    position: "relative",
                    height: height * 0.65,
                }}
            >
                <TinderCard photo={tinderPhotos[0]} />
                <TinderButtons />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColorTinder,
    },
});
