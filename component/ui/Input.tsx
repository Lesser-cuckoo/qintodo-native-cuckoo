import React from "react";
import { SetStateAction } from "react";
import { useState } from "react";
import { VFC } from "react";
import { Dispatch } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import tw from "twrnc";

type Props = {
  setIsFocus: Dispatch<SetStateAction<boolean>>;
};

export const Input: VFC<Props> = (props) => {
  const { setIsFocus } = props;
  const [InputText, setInputText] = useState<string>("");
  const onFocus = () => {
    setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };
  const onChangeText = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setInputText(e.nativeEvent.text);
  };

  return (
    <View style={tw`my-2`}>
      <TextInput
        value={InputText}
        onChange={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder="タスクを入力する"
        style={tw`bg-[#F1F5F9] py-3 px-4 rounded-2xl w-90`}
      />
    </View>
  );
};
