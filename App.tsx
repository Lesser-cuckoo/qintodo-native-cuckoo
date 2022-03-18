import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider, RadioButton } from "react-native-paper";
import { RadioButtonComponent } from "./components/ui/radiobutton";
// import { RadioButton } from "./components/ui/radiobutton";
// import { RadioButton } from "./components/ui/radiobutton";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* <Text>Open up App.tsx to start working on your app!</Text> */}
        {/* <StatusBar style="auto" /> */}
        <RadioButtonComponent color="today" />
        <RadioButtonComponent color="tomorrow" />
        <RadioButtonComponent color="other" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
