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
import { QinTodoIcon } from "./component/ui/QinTodoIcon";
import { Avater } from "./component/ui/Avater";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Task" component={TaskScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Theme" component={ThemeScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="TermsOfService" component={TermsOfServiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
