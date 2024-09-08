import { Platform, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import NavigationApp from "./navigationApp";
import { SafeAreaView } from "react-native-safe-area-context";
import * as firebase from "@react-native-firebase/app";
export type RootStackParams = {
  Test: any;
  Welcome: any;
  Submit: any;
  PageFour: any;
  PageFive: any;
  PageSix: any;
};

const App = () => {
  const linking = {
    prefixes: ["anlene://", "https://anlene.com"],
    config: {
      screens: {
        Welcome: {
          path: "Welcome",
        },
        Test: {
          path: "Test",
        },
        Submit: {
          path: "Submit",
        },
      },
    },
  };
  
  const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_APIKEY || "",
    authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN || "",
    projectId: process.env.EXPO_PUBLIC_PROJECTID || "",
    storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET || "",
    messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINGSENDERID || "",
    appId: process.env.EXPO_PUBLIC_APPID || "",
    measurementId: process.env.EXPO_PUBLIC_MEASUREMENTID || "",
    databaseURL: process.env.EXPO_PUBLIC_DATABASEURL || "",
  };

  if(Platform.OS === "web"){
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle={"light-content"}
        />
        <SafeAreaView
          style={{ flex: 1, marginTop: Platform.OS !== "web" ? -60 : null }}
        >
          <NavigationContainer linking={linking} independent={true}>
            <NavigationApp />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
