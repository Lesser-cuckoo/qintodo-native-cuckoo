import React, { VFC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/AntDesign";

export const bgColor = {
  red: "#EF4444",
  blue: "#3B82F6",
  gray: "#F1F5F9",
  today: "#F43F5E",
  tomorrow: "#FB923C",
  other: "#FBBF24",
} as const;

const ThemeScreen: VFC = () => {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <View style={tw`flex-1 pt-6`}>
      <TouchableOpacity
        style={tw`py-2 px-5 flex flex-row justify-between`}
        onPress={handleClick}
      >
        <Text style={tw`font-bold text-base`}>端末の設定に合わせる</Text>
        <Icon name="check" color="blue" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`py-2 px-5 flex flex-row justify-between`}
        onPress={handleClick}
      >
        <Text style={tw`font-bold text-base`}>ライト</Text>
        <Icon name="check" color="blue" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`py-2 px-5 flex flex-row justify-between`}
        onPress={handleClick}
      >
        <Text style={tw`font-bold text-base`}>ダーク</Text>
        <Icon name="check" color="blue" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default ThemeScreen;
