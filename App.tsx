import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskScreen from "./screens/TaskScreen";
import ThemeScreen from "./screens/ThemeScreen";
import AccountScreen from "./screens/AccountsScreen";
import MyPageScreen from "./screens/MyPageScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import TermsOfServiceScreen from "./screens/TermsOfServiceScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
  );
};
export default App;
