import React from "react";
import { Image, View } from "react-native";

import tw from "twrnc";

type Props = {
  avater?: string;
};

export const Avater = (props: Props) => {
  const { avater } = props;
  return (
    <View>
      <Image
        source={avater ? { url: avater } : require("../../assets/avater.png")}
        style={tw`h-12 w-12 rounded-full mr-2`}
      />
    </View>
  );
};
