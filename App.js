//확장팩
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//화면 요소
import ProfileScreen from "./src/ProfileScreen.js";
import AskScreen from "./src/AskScreen.js";
import KarmaScreen from "./src/KarmaScreen.js";
import AnbdScreen from "./src/AnbdScreen.js";
import ChatScreen from "./src/ChatScreen.js";

//아이콘

//하단 네비게이션 바
const Tab = createBottomTabNavigator();

const TabInfo = [
  {
    name: "프로필",
    component: { ProfileScreen },
    activeIcon: require("./img/profile_fill.png"),
    inactiveIcon: require("./img/profile.png"),
  },
  {
    name: "익명질문",
    component: { AskScreen },
    activeIcon: require("./img/profile_fill.png"),
    inactiveIcon: require("./img/profile.png"),
  },
  {
    name: "카르마",
    component: { KarmaScreen },
    activeIcon: require("./img/profile_fill.png"),
    inactiveIcon: require("./img/profile.png"),
  },
  {
    name: "아나바다",
    component: { AnbdScreen },
    activeIcon: require("./img/profile_fill.png"),
    inactiveIcon: require("./img/profile.png"),
  },
  {
    name: "채팅",
    component: { ChatScreen },
    activeIcon: require("./img/profile_fill.png"),
    inactiveIcon: require("./img/profile.png"),
  },
];

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {TabInfo.map((item) => {
          return (
            <Tab.Screen
              // key={item.name}
              name={item.name}
              component={item.component}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image
                      source={focused ? item.activeIcon : item.inactiveIcon}
                      style={{ width: 20, height: 20 }}
                    />
                  );
                },
              }}
            />
          );
        })}
        {/* <Tab.Screen
          name="익명질문"
          component={AskScreen}
          options={{ tabBarIcon: makeIconRender("cog") }}
        />
        <Tab.Screen
          name="카르마"
          component={KarmaScreen}
          options={{ tabBarIcon: makeIconRender("cog") }}
        />
        <Tab.Screen
          name="아나바다"
          component={AnbdScreen}
          options={{ tabBarIcon: makeIconRender("cog") }}
        />
        <Tab.Screen
          name="채팅"
          component={ChatScreen}
          options={{ tabBarIcon: makeIconRender("cog") }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
