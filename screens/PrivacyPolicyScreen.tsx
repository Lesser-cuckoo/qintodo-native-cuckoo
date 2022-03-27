import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { PrimaryButton } from "../component/ui/PrimaryButton";

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

const PrivacyPolicyScreen = (props: Props) => {
  const { navigation } = props;

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-2xl text-red-700 font-bold`}>
        プライバシーポリシー
      </Text>

      <PrimaryButton
        bgColor={bgColor.blue}
        title="タスクページへ"
        onPress={() => navigation.navigate("Task")}
        text="white"
        size="modal"
      />
    </View>
  );
};

export default PrivacyPolicyScreen;
