import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "twrnc";

const App = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-sky-200`}>
      <Text style={tw`text-2xl text-red-700 font-bold`}>
        Tailwind CSS on React Native!!!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
