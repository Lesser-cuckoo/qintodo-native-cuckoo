import React from "react";
import type { VFC } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";

export type bgProps = {
  red: "#EF4444";
  blue: "#3B82F6";
  gray: "#F1F5F9";
  today: "#F43F5E";
  tomorrow: "#FB923C";
  other: "#FBBF24";
};

type Props = {
  bgColor:
    | bgProps["red"]
    | bgProps["blue"]
    | bgProps["gray"]
    | bgProps["today"]
    | bgProps["tomorrow"]
    | bgProps["other"];
  title: string;
  onPress: () => void | Promise<void>;
  isIcon?: boolean;
  text: "black" | "white";
  size: "modal" | "md" | "lg";
};

/**
 *
 * @param props
 * @type {`bgColor`: background color of button}
 * @type {`title`: string}
 * @type {`onPress`:  () => void | Promise<void>}
 * @type {`isIcon`?: boolean (default: false)}
 * @type {`text`: "black" | "white"}
 * @type {`size`:  "modal" | "md" | "lg"}
 * @returns JSX.Element
 */

export const PrimaryButton: VFC<Props> = (props) => {
  const { bgColor, title, onPress, isIcon, text, size } = props;
  const mdStyle = tw`bg-[${bgColor}] rounded-3xl p-3 px-5 flex-row  items-center mx-1`;
  const lgStyle = tw`bg-[${bgColor}] rounded-3xl p-3 px-28 flex-row  items-center mx-1`;
  const modalStyle = tw`bg-[${bgColor}] rounded-3xl  py-3 w-28 flex-row  items-center mx-1 justify-center`;

  return (
    <TouchableOpacity
      style={size === "md" ? mdStyle : size === "lg" ? lgStyle : modalStyle}
      onPress={onPress}
    >
      <View style={tw`m-auto flex flex-row items-center`}>
        {isIcon && <AntDesign name="plus" style={tw`text-white pr-2`} />}
        <Text style={tw`text-${text} font-bold`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
