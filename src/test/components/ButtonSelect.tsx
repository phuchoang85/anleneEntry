import { Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";

const ButtonSelect = ({
  handleButtonPress,
  content,
  image,
}: {
  handleButtonPress: () => void;
  content: string;
  image: number;
}) => {
  return (
    <Pressable style={styles.container} onPress={handleButtonPress}>
      <Image source={image} style={styles.image} />
      <Text style={[stylesTextPuplic.text12bold, { color: colorPuplic.white }]}>
        {content}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: "white",
    borderRadius: 100,
  },
  container: {
    flexDirection: "column",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71A162",
    gap: 6,
    flex: 1
  },
});

export default ButtonSelect;
