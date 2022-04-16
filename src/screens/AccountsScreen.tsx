import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { PrimaryButton } from "src/components/ui/PrimaryButton";
import { signOut } from "src/libs/SupabaseClient";
import { MyPageHeader } from "src/components/MyPageHeader";
import { GoogleLogo } from "src/components/ui/GoogleLogo";
import { AppleLogo } from "src/components/ui/AppleLogo";

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

const AccountScreen = (props: Props) => {
  const { navigation } = props;

  const handleConnect = () => {
    alert("連携する");
  };
  const handleDeleteAccount = () => {
    alert("アカウント削除");
  };

  return (
    <>
      <MyPageHeader title="アカウント" navigation={navigation} />
      <View style={tw`flex-1 bg-white px-4`}>
        <View style={tw` py-2 mt-5`}>
          <Text style={tw`text-gray-400 font-bold`}>アカウントの連携</Text>
        </View>
        <View style={tw`items-center justify-between my-1 flex-row`}>
          <View style={tw`flex-row items-center`}>
            <GoogleLogo />
            <Text style={tw`font-bold text-base pl-3`}>Google</Text>
          </View>
          <PrimaryButton
            title="解除する"
            bgColor="#F1F5F9"
            text="black"
            size="md"
            onPress={handleConnect}
          />
        </View>
        <View style={tw`items-center justify-between my-1 flex-row`}>
          <View style={tw`flex-row items-center`}>
            <AppleLogo />
            <Text style={tw`font-bold text-base pl-3`}>Apple</Text>
          </View>
          <PrimaryButton
            title="解除する"
            bgColor="#3B82F6"
            text="white"
            size="md"
            onPress={handleConnect}
          />
        </View>

        <View style={tw` py-2 mt-5`}>
          <Text style={tw`text-gray-400 font-bold`}>アカウントの操作</Text>
        </View>

        <TouchableOpacity
          onPress={signOut}
          style={tw`text-red-500 items-center py-2 flex-row`}
        >
          <Text style={tw`text-red-500 font-bold text-base `}>ログアウト</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDeleteAccount}
          style={tw`text-red-500 items-center py-2 flex-row`}
        >
          <Text style={tw`text-red-500 font-bold  text-base `}>
            アカウントの削除
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AccountScreen;
