import { TouchableOpacity, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { QinTodoIcon } from "src/components/ui/QinTodoIcon";
import { Avater } from "src/components/ui/Avater";
// import {
//   addNewProfile,
//   // getAvatarUrl,
//   getProfile,
// } from "src/libs/SupabaseClient";
// import { useUser } from "src/components/UserContext";

type Props = {
  navigation: any;
};

export const Header = (props: Props) => {
  const { navigation } = props;
  const handleOpenMyPage = () => {
    navigation.navigate("MyPage");
  };

  // const { user } = useUser();
  // // const { errorToast } = useToast();
  // const [avatar, setAvatar] = useState<string>("");

  // const fetchProfile = useCallback(
  //   async (uid: string) => {
  //     if (user) {
  //       const profile = await getProfile(user.id);
  //       console.log(profile);

  //       if (profile) {
  //         setAvatar(profile.avatar);
  //       } else {
  //         const username = user.user_metadata.name
  //           ? user.user_metadata.name
  //           : "ユーザー";
  //         const avatar_url = user.user_metadata.avatar_url
  //           ? user.user_metadata.avatar_url
  //           : "";
  //         const isOk = await addNewProfile(uid, username, avatar_url);
  //         if (!isOk) {
  //           alert("プロフィールの新規登録に失敗しました。");
  //         } else {
  //           setAvatar(avatar_url);
  //         }
  //       }
  //     }
  //   },
  //   [user]
  // );

  // useEffect(() => {
  //   if (user) {
  //     fetchProfile(user.id);
  //   }
  // }, [user, fetchProfile]);

  return (
    <View style={tw`relative h-22 w-full bg-white`}>
      <View style={tw`items-center mt-10 h-10`}>
        <View style={tw`m-auto`}>
          <QinTodoIcon />
        </View>
        <View
          style={tw`right-6 absolute rounded-full overflow-hidden bg-indigo-300`}
        >
          <TouchableOpacity onPress={handleOpenMyPage}>
            {/* {avatar ? (
              <View>
                <Image
                  source={{ uri: `${avatar}` }}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </View>
            ) : ( */}
            <Avater rounded size={10} />
            {/* )} */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
