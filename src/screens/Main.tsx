import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { YStack } from "tamagui";

export default function Main() {
  return (
    <YStack f={1} bg={"#fff"} ai={"center"} jc={"center"}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </YStack>
  );
}
