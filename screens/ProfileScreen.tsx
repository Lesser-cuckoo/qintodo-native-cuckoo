import { Avater } from "../component/ui/Avater";
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

const ProfileScreen = (props: Props) => {
  const { navigation } = props;

  return (
    <View style={tw`flex-1 px-4 bg-white`}>
      {/* <Text style={tw`text-2xl text-red-700 font-bold`}>プロフィール</Text> */}

      <View>
        <Text style={tw`text-gray-400 text-sm font-bold  py-2`}>アイコン</Text>
      </View>
      <View style={tw`flex flex-row items-center`}>
        <Avater rounded={false} />
        <PrimaryButton
          bgColor="#F1F5F9"
          text="black"
          title="変更する"
          size="modal"
          onPress={() => navigation.navigate("task")}
        />
      </View>

      <View style={tw`my-5`}>
        <Text style={tw`text-gray-400 text-sm font-bold py-2`}>名前</Text>
        <PrimaryButton
          bgColor={bgColor.blue}
          title="保存する"
          onPress={() => navigation.navigate("Task")}
          text="white"
          size="lg"
        />
      </View>

      <PrimaryButton
        bgColor={bgColor.blue}
        title="保存する"
        onPress={() => navigation.navigate("Task")}
        text="white"
        size="lg"
      />
    </View>
  );
};

export default ProfileScreen;
