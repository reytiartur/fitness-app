import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import useStepCount from "../hooks/useStepCount"
import { Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { MaterialIcons } from "@expo/vector-icons"

const ScreenWidth = Dimensions.get("window").width

const dummyData = [
  {
    name: "Military press",
    muscle: "shoulders",
  },
  {
    name: "Bench press",
    muscle: "chest",
  },
  {
    name: "Single-arm cable triceps extension",
    muscle: "triceps",
  },
  {
    name: "Triceps Pushdown",
    muscle: "triceps",
  },
]

const ActivitiesWidget = () => {
  const { isPedometerAvailable, stepCount } = useStepCount()

  return (
    <View style={styles.widgetContainer}>
      <View style={styles.widgetHeader}>
        <Text style={styles.widgetHeaderMain}>Today's Activities</Text>
        <View style={styles.widgetHeaderSecContainer}>
          <TouchableOpacity>
            <Text style={styles.widgetHeaderSec}>Add exercises</Text>
          </TouchableOpacity>
          <AntDesign name="right" size={16} color={"#a7a7a7"} />
        </View>
      </View>

      <View style={styles.widgetMainContainer}>
        <LinearGradient
          style={styles.calories}
          colors={["#f5c889", "#edaf51"]}
          end={{ x: 0.9, y: 0.9 }}
        >
          <MaterialIcons
            name="local-fire-department"
            size={45}
            color={"rgba(255, 255, 255, 0.5)"}
          />
          <Text style={styles.caloriesCount}>4040</Text>
          <Text style={[styles.caloriesCount, { fontSize: 16 }]}>ckal</Text>
        </LinearGradient>

        <View style={styles.workout}>
          {dummyData.slice(0, 3).map((exercise) => (
            <View style={styles.workoutRow}>
              <View style={styles.bullet} />
              <View>
                <Text style={styles.exerciseName} numberOfLines={1}>
                  {exercise.name}
                </Text>
                <Text style={styles.exerciseMuscle}>{exercise.muscle}</Text>
              </View>
            </View>
          ))}
          <View style={styles.steps}>
            <MaterialCommunityIcons
              name="shoe-print"
              size={24}
              color="#C5C5C5"
            />
            {isPedometerAvailable ? (
              <Text style={styles.stepCount}>{stepCount}</Text>
            ) : null}
          </View>
        </View>
      </View>
    </View>
  )
}

export default ActivitiesWidget

const styles = StyleSheet.create({
  widgetContainer: {
    flex: 1,
  },
  widgetHeader: {
    flexDirection: "row",
    marginTop: 22,
    marginBottom: 12,
  },
  widgetHeaderMain: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
  },
  widgetHeaderSecContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  widgetHeaderSec: {
    color: "#a7a7a7",
  },
  widgetMainContainer: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 12,
    paddingVertical: 10,
    gap: 12,
  },
  calories: {
    flex: 1,
    padding: 8,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  caloriesCount: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
  },
  workout: {
    flex: 4,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  workoutRow: {
    flexDirection: "row",
    marginBottom: 8,
    gap: 8,
    width: "90%",
  },
  bullet: {
    borderRadius: 20,
    backgroundColor: "#FEE440",
    width: ScreenWidth * 0.02,
    height: "60%",
    shadowColor: "#FEE440",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 5,
  },
  exerciseName: {
    fontSize: 14,
    fontWeight: "600",
    flexShrink: 1,
  },
  exerciseMuscle: {
    fontSize: 12,
    color: "#a7a7a7",
    textTransform: "capitalize",
    fontWeight: "500",
  },
  steps: {
    gap: 6,
    paddingTop: 6,
    borderTopWidth: 1,
    borderColor: "#F0F0F0",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
  },
  stepCount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#C5C5C5",
  },
})
