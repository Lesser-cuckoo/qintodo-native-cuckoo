import * as React from "react";
import { useState } from "react";
import { RadioButton } from "react-native-paper";

type Props = {
  color: "today" | "tomorrow" | "other";
};

const TaskColor = {
  today: "#F43F5E",
  tomorrow: "#FB923C",
  other: "#FBBF24",
};

export const RadioButtonComponent = (props: Props) => {
  const { color } = props;
  const [value, setValue] = useState("");

  const handleOnPress = () => {
    if (value === "radio") {
      setValue("");
    } else {
      setValue("radio");
    }
  };

  return (
    <RadioButton.Group onValueChange={handleOnPress} value={value}>
      <RadioButton.Android
        value="radio"
        color={TaskColor[color]}
        // uncheckedColor={TaskColor[color]}
      />
    </RadioButton.Group>
  );
};
