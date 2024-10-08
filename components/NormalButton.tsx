import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";

const NormalButton = ({
  content,
  onPress,
  backgroundColor,
  textColor,
  haveBorder = true,
  disable = false,
}: {
  content: string;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  haveBorder?: boolean;
  disable?: boolean;
}) => {
  const { width: MAX_WIDTH } = useWindowDimensions();
  const styles = StyleSheet.create({
    button: {
      width: MAX_WIDTH >= 1024 ? 220 : 140,
      height: 44,
      borderRadius: 24,
      textAlign: "center",
      justifyContent: "center",
      alignSelf: "center",
      marginTop: 20,
      marginBottom: 8,
      borderColor: colorPuplic.RED,
    },
    styleTextNormal: {
      color: colorPuplic.white,
      textAlign: "center",
    },
  });

  return (
    <Pressable
      disabled={disable}
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: backgroundColor, borderWidth: haveBorder ? 1 : 0 },
      ]}
    >
      <Text
        style={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text22bold
            : stylesTextPuplic.text16bold,
          styles.styleTextNormal,
          { color: textColor },
        ]}
      >
        {content}
      </Text>
    </Pressable>
  );
};

export default NormalButton;
