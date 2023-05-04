import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./screens/HomeScreen"
import { Dimensions, StyleSheet } from "react-native"
import {
  Ionicons,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons"
import ProgressScreen from "./screens/ProgressScreen"
import ProfileScreen from "./screens/ProfileScreen"
import SettingsScreen from "./screens/SettingsScreen"
import ExercisesScreen from "./screens/ExercisesScreen"

const ScreenHeight = Dimensions.get("window").height

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#edaf51",
          tabBarInactiveTintColor: "#656565",
          tabBarStyle: styles.navbar,
          tabBarLabelStyle: styles.label,
          tabBarLabelPosition: "below-icon",
          tabBarIconStyle: styles.icon,
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Progress"
          component={ProgressScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Fontisto name="bar-chart" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-sharp" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Exercises"
          component={ExercisesScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="dumbbell" size={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings" size={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#fff",
    height: ScreenHeight * 0.11,
  },
  icon: {
    marginTop: 8,
  },
  label: {
    fontSize: 10,
    marginBottom: 2,
  },
})
