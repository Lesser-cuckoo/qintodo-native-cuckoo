import { VFC } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { AiOutlinePlus } from "react-icons/ai";
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
  children: React.ReactNode;
  onPress: () => void | Promise<void>;
  isIcon?: boolean;
  text: "black" | "white";
};

export const PrimaryButton: VFC<Props> = (props) => {
  const { bgColor, children, onPress, isIcon, text } = props;

  return (
    <TouchableOpacity
      style={tw`bg-[${bgColor}] rounded-3xl p-4 px-6 flex-row  items-center`}
      onPress={onPress}
    >
      {isIcon && <AiOutlinePlus style={tw`text-white font-bold`} />}
      <Text style={tw`text-${text} font-bold`}>{children}</Text>
    </TouchableOpacity>
  );
};
