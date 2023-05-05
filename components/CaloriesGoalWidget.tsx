import { StyleSheet, Text, View } from "react-native"
import ProgressCircle from "react-native-progress-circle"

const goal = 2400
const consumed = 1950
const burned = 150
const left = goal - consumed + burned
const percentLeft = Math.floor((consumed / (goal + burned)) * 100)

const CaloriesGoalWidget = () => {
  return (
    <View style={[styles.caloriesContainer, styles.widget]}>
      <View style={styles.caloriesTextContainer}>
        <Text style={styles.caloriesMain}>{left} left</Text>
        <View style={styles.caloriesSecContainer}>
          <Text style={styles.caloriesSec}>{consumed} eaten</Text>
          <Text style={styles.caloriesSec}>{"\u2022"}</Text>
          <Text style={styles.caloriesSec}>{burned} burned</Text>
        </View>
      </View>

      <View style={styles.ckalContainer}>
        <Text style={styles.ckal}>CKAL</Text>
      </View>

      <ProgressCircle
        percent={percentLeft}
        radius={38}
        borderWidth={7}
        color="#FEE440"
        shadowColor="#fff"
        bgColor="#0a0a0a"
      >
        <Text style={styles.progressText}>{percentLeft}%</Text>
      </ProgressCircle>
    </View>
  )
}

export default CaloriesGoalWidget

const styles = StyleSheet.create({
  caloriesContainer: {
    marginTop: 18,
    backgroundColor: "#0a0a0a",
    gap: 2,
    flexDirection: "row",
    position: "relative",
  },
  caloriesTextContainer: {
    justifyContent: "flex-end",
    paddingBottom: 8,
    flex: 1,
    gap: 3,
  },
  caloriesMain: {
    color: "#fff",
    fontSize: 26,
  },
  caloriesSecContainer: {
    flexDirection: "row",
    gap: 4,
  },
  caloriesSec: {
    color: "#C5C5C5",
    fontSize: 14,
  },
  ckalContainer: {
    position: "absolute",
    alignItems: "center",
    top: 8,
    left: 0,
    right: 0,
  },
  ckal: {
    color: "#fff",
    fontWeight: "500",
  },
  widget: {
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  progressText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
})
