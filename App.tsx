import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "twrnc";
import { Footer } from "./component/footer/Footer";

const App = () => {
  return (
    <View style={tw`flex-1 justify-center items-center w-full h-full`}>
      <StatusBar style="auto" />
      <View style={tw`py-4`}>
        <Text>headerを置く</Text>
      </View>
      <Text style={tw`flex-1 text-2xl text-red-700 font-bold w-full`}>
        Tailwind CSS on React Native!!!
      </Text>
      <Footer />
    </View>
  );
};

export default App;
