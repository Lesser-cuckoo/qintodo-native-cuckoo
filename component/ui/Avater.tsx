import React from "react";
import { Image, StyleSheet, View } from "react-native";

type Props = {
  avater?: string;
};

export const Avater = (props: Props) => {
  const styles = StyleSheet.create({
    avatar: {
      height: 50,
      width: 50,
      borderRadius: 30,
      marginRight: 8,
    },
  });
  const { avater } = props;
  return (
    <View>
      <Image
        source={avater ? { url: avater } : require("./assets/avater.svg")}
        style={styles.avatar}
      />
    </View>
  );
};
