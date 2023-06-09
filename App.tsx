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
import SettingsScreen from "./screens/SettingsScreen"
import ExercisesScreen from "./screens/ExercisesScreen"
import AuthScreen from "./screens/AuthScreen"
import useAuth from "./hooks/useAuth"
import { useEffect } from "react"
import { Provider } from "react-redux"
import { store } from "./store"
import { ProfileSettingScreen } from "./screens/ProfileSettingScreen"


const ScreenHeight = Dimensions.get("window").height

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function App() {
  const { userToken, getToken } = useAuth()

  useEffect(() => {
    getToken()
  }, [userToken])

  return (
    <Provider store={store}>
      <NavigationContainer>
        {userToken ? (
          <Tab.Navigator
            initialRouteName="HomeScreen"
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
              name="HomeScreen"
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
              component={ProfileSettingScreen}
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
                  <MaterialCommunityIcons
                    name="dumbbell"
                    size={26}
                    color={color}
                  />
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
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
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
