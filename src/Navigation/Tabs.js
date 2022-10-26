import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home, Settings } from "../Screens";

import { Platform, TouchableHighlight, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Utilities from "../Utility/UtilityMethods";
import Routes from "./Routes";

const Tab = createBottomTabNavigator();
const TabBarHeight = Utilities.hasNotch() ? 100 : 70;

export default function BottomTabs({ navigation, route }) {
  let theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{ headerShown: false }}
      tabBar={({ state, navigation }) => {
        let totalRoutes = [...state.routes];

        return (
          <>
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <View
                style={{
                  width: Utilities.wp(100),
                  flexDirection: "row",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  height: TabBarHeight,
                  paddingBottom: Utilities.hasNotch() ? 20 : 0,
                  shadowColor: theme?.colors?.text,
                  shadowOffset: { width: 0, height: 2 },
                  ...{
                    backgroundColor:
                      Platform["OS"] === "ios" ? theme?.colors?.background : "",
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 3,
                }}
              >
                {totalRoutes?.map((item, index) => {
                  return (
                    <TouchableHighlight
                      underlayColor={"transparent"}
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onPress={() => {
                        if (item.name !== totalRoutes[state.index].name) {
                          navigation.navigate(item.name);
                        }
                      }}
                    >
                      <>
                        {item?.params?.icon(theme, state.index === index)}
                        <Text
                          style={{
                            fontSize: theme["FontSize"]?.text_field,
                            color:
                              state.index === index
                                ? theme?.colors?.primary
                                : theme?.colors?.text,
                          }}
                        >
                          {item?.name}
                        </Text>
                      </>
                    </TouchableHighlight>
                  );
                })}
              </View>
            </View>
            <View style={{ marginBottom: TabBarHeight }} />
          </>
        );
      }}
    >
      <Tab.Screen
        name={Routes.HOME}
        initialParams={{
          icon: (theme, is_selected) => (
            <Icon
              name={"home"}
              size={25}
              color={is_selected ? theme?.colors?.primary : theme?.colors?.text}
            />
          ),
        }}
        component={Home}
      />

      <Tab.Screen
        name={Routes.SETTINGS}
        initialParams={{
          icon: (theme, is_selected) => (
            <Icon
              name={"home"}
              size={25}
              color={is_selected ? theme?.colors?.primary : theme?.colors?.text}
            />
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
}
