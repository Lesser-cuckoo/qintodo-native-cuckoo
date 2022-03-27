import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskScreen from "src/screens/TaskScreen";
import ThemeScreen from "src/screens/ThemeScreen";
import AccountScreen from "src/screens/AccountsScreen";
import MyPageScreen from "src/screens/MyPageScreen";
import PrivacyPolicyScreen from "src/screens/PrivacyPolicyScreen";
import TermsOfServiceScreen from "src/screens/TermsOfServiceScreen";
import ProfileScreen from "src/screens/ProfileScreen";
import { Auth } from "src/components/Auth";
import { UserContextProvider, useUser } from "src/components/UserContext";

const Stack = createNativeStackNavigator();

const Container = () => {
  const { user } = useUser();

  return user ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Task"
          component={TaskScreen}
          options={{ title: "タスク" }}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{ title: "マイページ" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "プロフィール" }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ title: "アカウント" }}
        />
        <Stack.Screen
          name="Theme"
          component={ThemeScreen}
          options={{ title: "テーマ" }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicyScreen}
          options={{ title: "プライバシーポリシー" }}
        />
        <Stack.Screen
          name="TermsOfService"
          component={TermsOfServiceScreen}
          options={{ title: "利用規約" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Auth />
  );
};

const App = () => {
  return (
    <UserContextProvider>
      <Container />
    </UserContextProvider>
  );
};
export default App;
