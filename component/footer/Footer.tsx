import React from "react";
import { Input } from "../ui/Input";
import { View } from "react-native";
import tw from "twrnc";
import { PrimaryButton } from "../ui/PrimaryButton";
import { useState } from "react";

export const bgColor = {
  red: "#EF4444",
  blue: "#3B82F6",
  gray: "#F1F5F9",
  today: "#F43F5E",
  tomorrow: "#FB923C",
  other: "#FBBF24",
} as const;

export const Footer = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const buttonProps = [
    {
      bgColor: bgColor.today,
      title: "今日する",
      str: "today",
    },
    {
      bgColor: bgColor.tomorrow,
      title: "明日する",
      str: "tomorrow",
    },
    {
      bgColor: bgColor.other,
      title: "今度する",
      str: "other",
    },
  ];
  return (
    <View style={tw`border-t border-gray-300`}>
      <Input setIsFocus={setIsFocus} />
      <View style={tw`flex-row`}>
        {isFocus &&
          buttonProps.map((props) => (
            <PrimaryButton
              key={props.str}
              bgColor={props.bgColor}
              onPress={() => alert(props.str)}
              title={props.title}
              text="white"
              isIcon={true}
              size="md"
            />
          ))}
      </View>
    </View>
  );
};
