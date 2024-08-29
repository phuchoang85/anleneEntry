import { View, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { colorPuplic } from "@/app/constant/stylesPuplic";
import ComponentTop from "./components/ComponentTop";
import ComponentBottom from "./components/ComponentBottom";
import { router } from "expo-router";

export default function PageOne() {
  const goToScreen = () => {
    router.push("/screens/pageTwo");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScrollView}>
        <ComponentTop />

        <Image
          source={require("@images/first_pic.png")}
          style={styles.styleImage}
        />

        <ComponentBottom goToScreen={goToScreen} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  styleImage: {
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: -1,
  },
  container: {
    flex: 1,
  },
  containerScrollView: {
    flex: 1,
    backgroundColor: colorPuplic.white,
    paddingBottom: 100,
  },
});
