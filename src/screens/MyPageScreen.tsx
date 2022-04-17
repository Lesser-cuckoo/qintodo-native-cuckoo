import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/AntDesign";
import { MyPageHeader } from "src/components/MyPageHeader";

export const bgColor = {
  red: "#EF4444",
  blue: "#3B82F6",
  gray: "#F1F5F9",
  today: "#F43F5E",
  tomorrow: "#FB923C",
  other: "#FBBF24",
} as const;

type Props = {
  navigation: any;
};

const MyPageScreen = (props: Props) => {
  const { navigation } = props;

  return (
    <>
      <MyPageHeader title="設定" navigation={navigation} />
      <ScrollView style={tw`flex-1 bg-white `}>
        <View style={tw`px-4 py-2 mt-5`}>
          <Text style={tw`text-gray-400 font-bold`}>設定</Text>
        </View>
        <TouchableOpacity
          style={tw`px-4 py-3 flex flex-row justify-between`}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={tw`font-bold`}>プロフィール</Text>
          <Icon size={20} color="gray" name="right" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`px-4 py-3 flex flex-row justify-between`}
          onPress={() => navigation.navigate("Account")}
        >
          <Text style={tw`font-bold`}>アカウント</Text>
          <Icon size={20} color="gray" name="right" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`px-4 py-3 flex flex-row justify-between`}
          onPress={() => navigation.navigate("Theme")}
        >
          <Text style={tw`font-bold`}>テーマ</Text>
          <Icon size={20} color="gray" name="right" />
        </TouchableOpacity>

        <View style={tw`px-4 py-2 mt-5 `}>
          <Text style={tw`text-gray-400 font-bold`}>サポート</Text>
        </View>

        <TouchableOpacity
          style={tw`px-4 py-3 flex flex-row justify-between`}
          onPress={() => navigation.navigate("PrivacyPolicy")}
        >
          <Text style={tw`font-bold`}>プライバシーポリシー</Text>
          <Icon size={20} color="gray" name="right" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`px-4 py-3 flex flex-row justify-between`}
          onPress={() => navigation.navigate("TermsOfService")}
        >
          <Text style={tw`font-bold`}>利用規約</Text>
          <Icon size={20} color="gray" name="right" />
        </TouchableOpacity>
        <View style={tw`px-4 py-3`}>
          <Text style={tw`font-bold`}>オープンソースライセンス</Text>
        </View>
        <View style={tw`px-4 py-3`}>
          <Text style={tw`font-bold`}>お問い合わせ</Text>
        </View>
        <View style={tw`px-4 py-3 flex flex-row justify-between`}>
          <Text style={tw`font-bold`}>バージョン</Text>
          <Text style={tw`font-bold`}>1.0.0</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default MyPageScreen;
