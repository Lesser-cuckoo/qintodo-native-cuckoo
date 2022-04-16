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
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

const Container = () => {
  const { user } = useUser();

  return user ? (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Task" component={TaskScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Theme" component={ThemeScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="TermsOfService" component={TermsOfServiceScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
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
