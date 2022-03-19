import React from "react";
import { SetStateAction } from "react";
import { VFC } from "react";
import { Dispatch } from "react";
import { TextInput, View } from "react-native";
import tw from "twrnc";

type Props = {
  setIsFocus: Dispatch<SetStateAction<boolean>>;
};

export const Input: VFC<Props> = (props) => {
  const { setIsFocus } = props;
  const onFocus = () => {
    setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };

  return (
    <View style={tw`m-2`}>
      <TextInput
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder="タスクを入力する"
        style={tw`bg-[#F1F5F9] py-3 px-4 w-80 rounded-2xl `}
      />
    </View>
  );
};
