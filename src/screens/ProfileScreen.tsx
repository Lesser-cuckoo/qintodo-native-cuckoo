import React, { useCallback, useEffect, useRef, useState } from "react";
import { Text, View, Image, TextInput } from "react-native";
import { MyPageHeader } from "src/components/MyPageHeader";
import { Avater } from "src/components/ui/Avater";
import { PrimaryButton } from "src/components/ui/PrimaryButton";
import {
  getProfile,
  updateProfile,
  uploadAvatar,
} from "src/libs/SupabaseClient";
import tw from "twrnc";
import { useUser } from "src/components/UserContext";

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
  // const handleSave = () => {
  //   alert("Saved!");
  // };

  const { user } = useUser();
  const [username, setUsername] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [editName, setEditName] = useState<string>(username);
  const [previewIcon, setPreviewIcon] = useState<string>(avatar);
  const [previewIconFile, setPreviewIconFile] = useState<File | null>(null);
  // const { errorToast, successToast } = useToast();

  const iconInputRef = useRef<HTMLInputElement | null>(null);

  const fetchProfile = useCallback(async () => {
    if (user) {
      const profile = await getProfile(user.id);
      if (profile) {
        setUsername(profile.username);
        setEditName(profile.username);
        setAvatar(profile.avatar);
        setPreviewIcon(profile.avatar);
      }
    }
  }, [user]);

  // const handleChangePreviewIcon = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (!e.target.files?.length) {
  //       return;
  //     }
  //     setPreviewIconFile(e.target.files[0]);
  //     setPreviewIcon(URL.createObjectURL(e.target.files[0]));
  //     e.currentTarget.value = "";
  //   },
  //   []
  // );

  // const handleClickChangeIcon = useCallback(() => {
  //   if (!iconInputRef || !iconInputRef.current) {
  //     return;
  //   }
  //   iconInputRef.current.click();
  // }, []);

  const handleSave = useCallback(async () => {
    if (user) {
      if (editName == "") {
        alert("????????????????????????????????????");
        return;
      }
      let isIconChanged = false;
      if (previewIconFile) {
        const isOk = await uploadAvatar(user.id, previewIconFile);
        if (!isOk) {
          alert("?????????????????????????????????????????????????????????");
          return;
        }
        isIconChanged = true;
      }
      const isOkUpdate = await updateProfile(
        user.id,
        editName,
        isIconChanged ? "storage" : avatar
      );
      if (!isOkUpdate) {
        alert("???????????????????????????????????????????????????");
      } else {
        fetchProfile();
        alert("??????????????????????????????????????????");
      }
    }
  }, [user, editName, previewIconFile, avatar, fetchProfile]);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user, fetchProfile]);

  return (
    <>
      <MyPageHeader title="??????????????????" navigation={navigation} />
      <View style={tw`flex-1 px-5 bg-white`}>
        {/* <Text style={tw`text-2xl text-red-700 font-bold`}>??????????????????</Text> */}

        <View style={tw`my-2`}>
          <Text style={tw`text-gray-400 text-sm font-bold  py-2`}>
            ????????????
          </Text>
          <View style={tw`flex flex-row items-center`}>
            {avatar ? (
              <View>
                <Image
                  source={{ uri: `${previewIcon}` }}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
              </View>
            ) : (
              <Avater rounded={false} size={26} />
            )}
            {/* input???????????????????????????????????? */}
            <PrimaryButton
              bgColor="#F1F5F9"
              text="black"
              title="????????????"
              size="md"
              onPress={handleChangeAvater}
            />
          </View>
        </View>

        <View style={tw`mt-3 mb-8`}>
          <Text style={tw`text-gray-400 text-sm font-bold py-2`}>??????</Text>
          <View style={tw`my-2`}>
            <TextInput
              value={username}
              // onChange={onChangeText}
              // onBlur={onBlur}
              // onFocus={onFocus}
              placeholder={username}
              style={tw`bg-[#F1F5F9] py-3 px-4 rounded-2xl`}
            />
          </View>
        </View>

        <PrimaryButton
          bgColor={bgColor.blue}
          title="????????????"
          onPress={handleSave}
          text="white"
          size="lg"
        />
      </View>
    </>
  );
};

export default ProfileScreen;
