import { TextInput, View } from "react-native";
import tw from "twrnc";

export const Input = () => {
  return (
    <View>
      <TextInput
        placeholder="input placeholder"
        style={tw`bg-[#F1F5F9] py-3 px-24 rounded-full text-left`}
      />
    </View>
  );
};
