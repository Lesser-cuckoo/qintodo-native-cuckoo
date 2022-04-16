import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, View } from "react-native";
import tw from "twrnc";
import { Footer } from "../components/footer/Footer";

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
  return (
    <>
      <View style={tw`flex-1 justify-center items-center`}>
        <StatusBar style="auto" />
        <Button
          title="MyPageへ"
          onPress={() => navigation.navigate("MyPage")}
        />
      </View>
      <Footer />
    </>
  );
};

export default TaskScreen;
