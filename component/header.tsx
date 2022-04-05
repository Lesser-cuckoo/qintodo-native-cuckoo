import { Avater } from "../component/ui/Avater";
import { QinTodoIcon } from "../component/ui/QinTodoIcon";
import { View } from "react-native";
import React from "react";
import tw from "twrnc";

export const Header = () => {
  return (
    <View style={tw`relative h-22 w-full`}>
      <View style={tw`items-center mt-10 h-10`}>
        <View style={tw`m-auto`}>
          <QinTodoIcon />
        </View>
        <View
          style={tw`right-6 absolute rounded-full overflow-hidden bg-indigo-300`}
        >
          <Avater />
        </View>
      </View>
    </View>
  );
};
