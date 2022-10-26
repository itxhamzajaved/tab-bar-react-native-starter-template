import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import Header from "../Components/Header/index";
import {
  AboutApp,
  Login,
  PrivacyPolicy,
  Splash,
  TermsAndConditions,
} from "../Screens";
import Routes from "./Routes";
import BottomTabs from "./Tabs";

const Stack = createStackNavigator();
export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.SPLASH}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name={Routes.SPLASH}
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={Routes.ABOUT_APP}
        component={AboutApp}
        options={{
          header: Header,
          title: "About App",
        }}
      />
      <Stack.Screen
        name={Routes.PRIVACY_POLICY}
        component={PrivacyPolicy}
        options={{
          header: Header,
          title: "Privacy Policy",
        }}
      />
      <Stack.Screen
        name={Routes.TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
        options={{
          header: Header,
          title: "Terms & Conditions",
        }}
      />

      {/* Tab Bar Route */}
      <Stack.Screen
        name={Routes.HOME}
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
