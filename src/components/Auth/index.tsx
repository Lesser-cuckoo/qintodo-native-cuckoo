import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { client, SUPABASE_URL } from "src/libs/SupabaseClient";
import { startAsync, makeRedirectUri } from "expo-auth-session";

type Provider = "google" | "apple";

const providerList: Provider[] = ["google", "apple"];

export const Auth = () => {
  const handleSignIn = async (provider: "google" | "apple") => {
    const returnUrl = makeRedirectUri({ useProxy: false });
    const authUrl = `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}&redirect_to=${returnUrl}`;

    const response = await startAsync({ authUrl, returnUrl });

    if (!response) {
      return;
    }

    if (response.type === ("success" || "error")) {
      if (!response.params.refresh_token) {
        return;
      }
      await client.auth.signIn({
        refreshToken: response.params.refresh_token,
      });
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      {providerList.map((provider, idx) => {
        return (
          <TouchableOpacity
            key={idx}
            style={tw`border-2 rounded-full my-4 py-2 w-60`}
            onPress={() => handleSignIn(provider)}
          >
            <Text style={tw`text-2xl font-bold text-center`}>{provider}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
