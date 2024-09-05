import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";

export const colorLinearPublic = {
  green: {
    colors: ["#73A442", "#478449"],
    locations: [0, 1],
  },
  radialgreen: {
    colors: ["#80FF00", "#73A442", "#478449"],
    locations: [0, 0.59, 1],
  },
  goldLinear: {
    colors: ["#FFC200", "#FFFCAB", "#ECD24A", "#ECD24A", "#FFC200"],
    locations: [0, 0.12, 0.49, 0.87, 1],
  },
  linear: {
    colors: ["#0E470E", "#20680D", "#2E820D", "#13500E"],
    locations: [0, 0.24, 0.72, 1],
  },
  linearYellow: {
    colors: [
      "#BA872C",
      "#C3993B",
      "#D7C15B",
      "#E3D96F",
      "#E8E276",
      "#ESDE73",
      "#DDD16C",
      "#CEBB5F",
      "#BB9D4E",
      "#A27738",
      "#8B5021",
    ],
    locations: [0.01, 0.08, 0.24, 0.37, 0.45, 0.53, 0.63, 0.72, 0.82, 0.92, 1],
  },
  radialYellow: {
    colors: [
      "#BA872C",
      "#C3993B",
      "#D7C15B",
      "#E3D96F",
      "#E8E276",
      "#ESDE73",
      "#DDD16C",
      "#CEBB5F",
      "#BB9D4E",
      "#A27738",
      "#8B5021",
    ],
    locations: [0.01, 0.08, 0.24, 0.37, 0.45, 0.53, 0.63, 0.72, 0.82, 0.92, 1],
  },
  linearYellowhao: {
    colors: ["#BA872C", "#E8E276", "#E1D770", "#8B5021"],
    locations: [0, 0.25, 0.7, 1],
  },
  linearDuyen: {
    colors: ["#0E470E", "#20680D", "#2E820D", "#13500E"],
    locations: [0, 0.24, 0.72, 1],
  },
  greenKA: {
    colors: ["#73A442", "#478449"],
    locations: [0, 1],
  },
  gray: {
    colors: ["#969696", "#969696"],
    locations: [0, 1],
  },
  feedback: {
    colors: ["#376E48", "#187B33"],
    locations: [0, 0.4],
  },
  redLinear: {
    colors: ["#FF7972", "#ED1C24"],
    locations: [0, 1],
  },
  greenFB: {
    colors: ["#2E820D", "#187B33", "#187B33", "#2E820D"],
    locations: [0, 0.4, 0.67, 1],
  },
  threeblock: {
    colors: ["#FFC200", "#F1ED86", "#ECD24A", "#ECD24A", "#FFC200"],
    locations: [0, 0.35, 0.61, 0.8, 1],
  },
  mauKV: {
    colors: [
      "rgba(14, 71, 14, 0.1)",
      "rgba(32, 104, 13, 0.15)",
      "#2E820D",
      "#13500E",
    ],
    locations: [0, 0.24, 0.72, 1],
  },
  luuy: {
    colors: ["#FD9500", "#FEBF00", "#FB8402"],
    locations: [0, 0.53, 1],
  },
};

export const colorPuplic = {
  black1: "#000000",
  black2: "#1D1C1C",
  green2: "#478449",
  grey: "#E6EAEF",
  red: "#DF1E13",
  RED: "#C6463A",
  yellow: "#ECD24A",
  greenStrong: "#478449",
  greenWeak: "#73A442",
  white: "#FFFFFF",
  gray1: "#464646",
  text: "#FFC200",
  textN: "rgba(0, 0, 0, 0.2)",
  NOTE: "#71A162",
  bg: "#FDFFFA",
  orange: "#FF7A00",
  buttonCTA: "#B70002",
  haycanthan: "#969696",
};

export const stylesTextPuplic = StyleSheet.create({
  text42bold: {
    fontSize: 42,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 58,
  },
  text56bold: {
    fontSize: 56,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 68,
  },
  text38bold: {
    fontSize: 38,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 52,
  },
  text28bold: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 36,
  },
  text26boldTitle: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 32,
  },
  text26bold: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 32,
  },
  text26regular: {
    fontSize: 26,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 32,
  },
  text24book: {
    fontSize: 24,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    fontStyle: "italic",
    lineHeight: 32,
  },
  text24regular: {
    fontSize: 24,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 32,
  },
  text24bold: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 36,
  },

  text22regular: {
    fontSize: 22,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 34,
  },
  text20bold: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 28,
  },
  text20regular: {
    fontSize: 20,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 28,
  },
  text20bookItalic: {
    fontSize: 20,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    fontStyle: "italic",
    lineHeight: 28,
  },
  text18book: {
    fontSize: 18,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    fontStyle: "italic",
    lineHeight: 24,
  },
  text18regular: {
    fontSize: 18,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 25,
  },
  text18bold: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 27,
  },
  text13reg: {
    fontSize: 13,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 18,
  },
  text18italic: {
    fontSize: 18,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    fontStyle: "italic",
    lineHeight: 24,
  },
  text16book: {
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    fontStyle: "italic",
    lineHeight: 24,
  },
  text16regular: {
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 24,
  },
  text16bold: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 20,
  },
  text16bookItalic: {
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    fontStyle: "italic",
    lineHeight: 20,
  },
  text15reg: {
    fontSize: 15,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 18,
  },
  text15bold: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 18,
  },
  text14bold: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 20,
  },
  text14book: {
    fontSize: 14,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    fontStyle: "italic",
    lineHeight: 18,
  },
  text14regular: {
    fontSize: 14,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 19,
  },
  text14bookItalic: {
    fontSize: 14,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    fontStyle: "italic",
    lineHeight: 18,
  },
  text13book: {
    fontSize: 13,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    fontStyle: "italic",
    lineHeight: 18,
  },
  text13bold: {
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 17,
  },
  text12reg: {
    fontSize: 12,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 16,
  },
  text12italic: {
    fontSize: 12,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    fontStyle: "italic",
    lineHeight: 16,
  },
  text12regular: {
    fontSize: 12,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 16,
  },
  text12bold: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "SVN-Gotham Regular",
    lineHeight: 16,
  },
  text10book: {
    fontSize: 10,
    fontWeight: "normal",
    fontFamily: "SVN-Gotham Regular",
    fontStyle: "italic",
    lineHeight: 13,
  },
});
