import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

import tw from "twrnc";

type Props = {
  rounded: boolean;
  size: number;
};

export const Avater = (props: Props) => {
  const { rounded, size } = props;
  const AvaterSize = `h-${size} w-${size}`;
  return (
    <View
      style={tw`${
        rounded === true ? "rounded-full" : ""
      } overflow-hidden bg-blue-200 ${AvaterSize}`}
    >
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
