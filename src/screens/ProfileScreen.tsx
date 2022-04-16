import React from "react";
import { Text, View } from "react-native";
import { MyPageHeader } from "src/components/MyPageHeader";
import { Avater } from "src/components/ui/Avater";
import { PrimaryButton } from "src/components/ui/PrimaryButton";
import tw from "twrnc";

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

const ProfileScreen = (props: Props) => {
  const { navigation } = props;

  const handleChangeAvater = () => {
    alert("change avater");
  };
  const handleSave = () => {
    alert("Saved!");
  };

  return (
    <>
      <MyPageHeader title="プロフィール" navigation={navigation} />
      <View style={tw`flex-1 px-5 bg-white`}>
        {/* <Text style={tw`text-2xl text-red-700 font-bold`}>プロフィール</Text> */}

        <View style={tw`my-2`}>
          <Text style={tw`text-gray-400 text-sm font-bold  py-2`}>
            アイコン
          </Text>
          <View style={tw`flex flex-row items-center`}>
            <Avater rounded={false} size={26} />
            {/* inputコンポーネントを配置する */}
            <PrimaryButton
              bgColor="#F1F5F9"
              text="black"
              title="変更する"
              size="md"
              onPress={handleChangeAvater}
            />
          </View>
        </View>

        <View style={tw`mt-3 mb-8`}>
          <Text style={tw`text-gray-400 text-sm font-bold py-2`}>名前</Text>
          {/* inputコンポーネントと入れ替える */}
          <PrimaryButton
            bgColor={bgColor.blue}
            title="保存する"
            onPress={handleSave}
            text="white"
            size="lg"
          />
        </View>

        <PrimaryButton
          bgColor={bgColor.blue}
          title="保存する"
          onPress={handleSave}
          text="white"
          size="lg"
        />
      </View>
    </>
  );
};

export default ProfileScreen;
