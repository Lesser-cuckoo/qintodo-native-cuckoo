import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider, RadioButton } from "react-native-paper";
import { RadioButtonComponent } from "./components/ui/radiobutton";
import { Text, View } from "react-native";
import tw from "twrnc";
import React from "react";

const App = () => {
  return (
    <PaperProvider>
      <View style={tw`flex-1 justify-center items-center bg-sky-200`}>
        <Text style={tw`text-2xl text-red-700 font-bold`}>
          Tailwind CSS on React Native!!!
        </Text>
        <StatusBar style="auto" />
        <RadioButtonComponent color="today" />
        <RadioButtonComponent color="tomorrow" />
        <RadioButtonComponent color="other" />
      </View>
    </PaperProvider>
  );
};

export default App;
