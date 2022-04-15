import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/AntDesign";

type Props = {
  title: string;
  navigation: any;
};
export const MyPageHeader = (props: Props) => {
  const { title, navigation } = props;

  return (
    <View style={tw` h-20 w-full relative`}>
      <View style={tw`mt-10`}>
        <View style={tw`m-auto`}>
          <Text style={tw`text-lg font-bold`}>{title}</Text>
          {/* <MdOutlineArrowBackIosNew size={24} /> */}
        </View>
        {title === "設定" ? (
          <TouchableOpacity
            style={tw`left-5 absolute `}
            onPress={() => navigation.navigate("Task")}
          >
            <Icon name="close" color="black" size={28} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={tw`left-5 absolute `}
            onPress={() => navigation.navigate("MyPage")}
          >
            <Icon name="left" color="black" size={28} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
