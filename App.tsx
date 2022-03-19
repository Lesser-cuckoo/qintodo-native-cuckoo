import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "twrnc";
import { Footer } from "./component/footer/Footer";

const App = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-2xl text-red-700 font-bold`}>
        Tailwind CSS on React Native!!!
      </Text>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
