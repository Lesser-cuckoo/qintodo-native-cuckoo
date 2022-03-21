import { Text, View } from "react-native";
import { Avater } from "./component/ui/Avater";
import React from "react";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import { PrimaryButton } from "./component/ui/PrimaryButton";
import { QinTodoIcon } from "./component/ui/QinTodoIcon";

export const bgColor = {
  red: "#EF4444",
  blue: "#3B82F6",
  gray: "#F1F5F9",
  today: "#F43F5E",
  tomorrow: "#FB923C",
  other: "#FBBF24",
} as const;

const App = () => {
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
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-2xl text-red-700 font-bold`}>
        Tailwind CSS on React Native!!!
      </Text>
      <View style={tw`flex-row`}>
        {buttonProps.map((props) => (
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
      <PrimaryButton
        bgColor={bgColor.blue}
        onPress={() => alert("blue")}
        title="保存する"
        text="white"
        size="lg"
      />
      <PrimaryButton
        bgColor={bgColor.red}
        onPress={() => alert("red")}
        title="OK"
        text="white"
        size="modal"
      />
      <PrimaryButton
        bgColor={bgColor.gray}
        onPress={() => alert("gray")}
        title="キャンセル"
        text="black"
        size="modal"
      />
      <PrimaryButton
        bgColor={bgColor.blue}
        onPress={() => alert("連携")}
        title="連携する"
        text="white"
        size="modal"
      />
      <PrimaryButton
        bgColor={bgColor.gray}
        onPress={() => alert("解除")}
        title="解除する"
        text="black"
        size="modal"
      />
      <StatusBar style="auto" />
      <Avater />
      <QinTodoIcon />
    </View>
  );
};

export default App;
