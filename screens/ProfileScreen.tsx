import { MyPageHeader } from "../component/MyPageHeader";
import React from "react";
import { ScrollView, Text, View } from "react-native";
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

const ProfileScreen = (props: Props) => {
  const { navigation } = props;

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <MyPageHeader title="プロフィール" navigation={navigation} />

      <ScrollView>
        <Text style={tw`text-2xl text-red-700 font-bold`}>プロフィール</Text>

        <PrimaryButton
          bgColor={bgColor.blue}
          title="タスクページへ"
          onPress={() => navigation.navigate("Task")}
          text="white"
          size="modal"
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
