import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { PrimaryButton } from "src/components/ui/PrimaryButton";

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

const MyPageScreen = (props: Props) => {
  const { navigation } = props;

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-2xl text-red-700 font-bold`}>マイページ</Text>

      <PrimaryButton
        bgColor={bgColor.gray}
        title="プロフィール"
        text="black"
        size="md"
        onPress={() => navigation.navigate("Profile")}
        // onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <PrimaryButton
        bgColor={bgColor.gray}
        title="アカウント"
        text="black"
        size="md"
        onPress={() => navigation.navigate("Account")}
        // onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <PrimaryButton
        bgColor={bgColor.gray}
        title="テーマ"
        text="black"
        size="md"
        onPress={() => navigation.navigate("Theme")}
        // onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <PrimaryButton
        bgColor={bgColor.gray}
        title="プライバシーポリシー"
        text="black"
        size="md"
        onPress={() => navigation.navigate("PrivacyPolicy")}
        // onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <PrimaryButton
        bgColor={bgColor.gray}
        title="利用規約"
        onPress={() => navigation.navigate("TermsOfService")}
        text="black"
        size="md"
      />
      <PrimaryButton
        bgColor={bgColor.blue}
        title="タスクページへ"
        onPress={() => navigation.navigate("Task")}
        text="white"
        size="md"
      />
    </View>
  );
};

export default MyPageScreen;
