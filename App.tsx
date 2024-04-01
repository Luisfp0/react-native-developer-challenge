import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { TamaguiProvider, View } from "@tamagui/core";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./src/screens/Main";
import config from "./tamagui.config";

export default function App() {
  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <Main />
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
