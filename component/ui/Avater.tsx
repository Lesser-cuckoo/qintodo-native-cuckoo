import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

import tw from "twrnc";

export const Avater = () => {
  return (
    <View style={tw`h-10 w-10`}>
      <Svg viewBox="0 0 20 20" fill="currentColor">
        <Path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        />
      </Svg>
    </View>
  );
};
