import { View } from "react-native";
import React from "react";
import tw from "twrnc";
import { QinTodoIcon } from "src/components/ui/QinTodoIcon";
import { Avater } from "src/components/ui/Avater";

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
          <Avater rounded />
        </View>
      </View>
    </View>
  );
};
