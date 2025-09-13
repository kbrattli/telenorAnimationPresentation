import tinderImage1 from "@/assets/tinderPhotos/1.jpeg";
import tinderImage2 from "@/assets/tinderPhotos/2.jpeg";
import tinderImage4 from "@/assets/tinderPhotos/4.webp";
import { Dimensions, StyleSheet, View } from "react-native";
import { TinderCard } from "./tinderUtil/TinderCard";
import { TinderHeader } from "./tinderUtil/TinderDumbStyle";

const tinderPhotos = [tinderImage1, tinderImage2, tinderImage4];

const { width, height } = Dimensions.get("window");
const backgroundColorTinder = "#131218";
const rejectColor = "#E34286";
const likeColor = "#86CA53";
const circleColor = "#23282C";

export default function Screen1() {
    return (
        <View style={styles.container}>
            <TinderHeader />
            <View
                style={{
                    position: "relative",
                    width: width,
                    height: height * 0.6,
                }}
            >
                <TinderCard photo={tinderPhotos[0]} />
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
