import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// Navigation stacks are here
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Navigators for stak and tab
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Components imports are here
import Home from "./components/Home";
import Details from "./components/Details";
import Profile from "./components/Profile";
import Liked from "./components/Liked";

// Colors import here
import colors from "./assets/colors/colors";

//Icons import here
import Icon from "react-native-vector-icons/FontAwesome";

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarinactiveColor: colors.gray,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
