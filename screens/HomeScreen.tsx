import { Image, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import ActivitiesWidget from "../components/ActivitiesWidget"
import CaloriesGoalWidget from "../components/CaloriesGoalWidget"
import CaloriesIntakeWidget from "../components/CaloriesIntakeWidget"

export default function HomeScreen() {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={styles.homeScreenContainer}
    >
      <View style={styles.profileInfo}>
        <Image
          style={styles.avatarImage}
          source={{
            uri: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.welcoming}>Welcome back!</Text>
          <Text style={styles.name}>Artur Reyti</Text>
        </View>
        {/* Icon pro/upgrade */}
      </View>

      <CaloriesGoalWidget />

      <View style={styles.widgetsContainer}>
        <ActivitiesWidget />

        <CaloriesIntakeWidget />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  profileInfo: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    paddingTop: 6,
  },
  avatarImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  textContainer: {
    flex: 1,
  },
  welcoming: {
    color: "#a7a7a7",
    fontSize: 13,
  },
  name: {
    color: "#0a0a0a",
    fontSize: 16,
    fontWeight: "500",
  },
  widgetsContainer: {
    gap: 20,
    flex: 1,
    paddingBottom: 12,
  },
})
