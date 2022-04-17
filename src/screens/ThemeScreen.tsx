import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/AntDesign";
import { MyPageHeader } from "src/components/MyPageHeader";

export const bgColor = {
  red: "#EF4444",
  blue: "#3B82F6",
  gray: "#F1F5F9",
  today: "#F43F5E",
  tomorrow: "#FB923C",
  other: "#FBBF24",
} as const;

type Props = {
  navigation: any;
};

const ThemeScreen = (props: Props) => {
  const { navigation } = props;

  const [isTheme, setTheme] = useState<"light" | "dark" | "other">("light");

  const handleClick = () => {
    alert("clicked");
  };
  return (
    <>
      <MyPageHeader title="テーマ" navigation={navigation} />
      <View style={tw`flex-1 pt-6 bg-white `}>
        <TouchableOpacity
          style={tw`py-2 px-5 flex flex-row justify-between`}
          onPress={handleClick}
        >
          <Text style={tw`font-bold text-base`}>端末の設定に合わせる</Text>
          {isTheme === "other" ? (
            <Icon name="check" color="blue" size={24} />
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`py-2 px-5 flex flex-row justify-between`}
          onPress={handleClick}
        >
          <Text style={tw`font-bold text-base`}>ライト</Text>
          {isTheme === "light" ? (
            <Icon name="check" color="blue" size={24} />
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`py-2 px-5 flex flex-row justify-between`}
          onPress={handleClick}
        >
          <Text style={tw`font-bold text-base`}>ダーク</Text>
          {isTheme === "dark" ? (
            <Icon name="check" color="blue" size={24} />
          ) : null}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ThemeScreen;
