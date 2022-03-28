import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import tw from "twrnc";
import { Footer } from "../component/footer/Footer";

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

const TaskScreen = (props: Props) => {
  const { navigation } = props;
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
    <>
      <View style={tw`flex-1 justify-center items-center`}>
        <StatusBar style="auto" />
        <Button
          title="MyPageへ"
          onPress={() => navigation.navigate("MyPage")}
          // onPress={() => navigation.navigate("Profile", { name: "Jane" })}
        />
      </View>
      <Footer />
    </>
  );
};

export default TaskScreen;
