import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons, FontAwesome } from "@expo/vector-icons"

const CaloriesIntakeWidget = () => {
  return (
    <View style={styles.widgetContainer}>
      <View style={styles.widgetHeader}>
        <Text style={styles.widgetHeaderMain}>Today's Consumption</Text>
        <View style={styles.widgetHeaderSecContainer}>
          <TouchableOpacity>
            <Text style={styles.widgetHeaderSec}>Add intake</Text>
          </TouchableOpacity>
          <AntDesign name="right" size={16} color={"#a7a7a7"} />
        </View>
      </View>

      <View
        style={[
          styles.widgetMainContainer,
          { flex: 2, backgroundColor: "#454545" },
        ]}
      >
        <Text style={styles.calories}>2201 kcal</Text>

        <View style={styles.macrosRow}>
          <View style={styles.block}>
            <Text style={styles.macroName}>Carbs</Text>
            <View style={styles.progressContainer}>
              <View
                style={[
                  styles.progressBar,
                  {
                    width: "50%",
                    backgroundColor: "orange",
                  },
                ]}
              />
            </View>
            <Text style={styles.macroCount}>140/125</Text>
          </View>

          <View style={styles.block}>
            <Text style={styles.macroName}>Protein</Text>
            <View style={styles.progressContainer}>
              <View
                style={[
                  styles.progressBar,
                  {
                    width: "90%",
                    backgroundColor: "salmon",
                  },
                ]}
              />
            </View>
            <Text style={styles.macroCount}>198/205</Text>
          </View>

          <View style={styles.block}>
            <Text style={styles.macroName}>Fat</Text>
            <View style={styles.progressContainer}>
              <View
                style={[
                  styles.progressBar,
                  {
                    width: "20%",
                    backgroundColor: "pink",
                  },
                ]}
              />
            </View>
            <Text style={styles.macroCount}>66/70</Text>
          </View>
        </View>
      </View>

      <LinearGradient
        style={[
          styles.widgetMainContainer,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 14,
          },
        ]}
        colors={["#39b6c4", "#92e6f0"]}
        end={{ x: 0.5, y: 0.9 }}
      >
        <View style={styles.waterContainer}>
          <Ionicons
            name="water-outline"
            size={24}
            color={"rgba(255, 255, 255, 0.3)"}
          />
          <Text style={styles.waterText}>Water Intake</Text>
        </View>
        <View style={styles.calcContainer}>
          <FontAwesome
            name="minus-circle"
            size={32}
            color="rgba(255, 255, 255, 0.7)"
          />
          <Text style={styles.liters}>1.5L</Text>
          <FontAwesome
            name="plus-circle"
            size={32}
            color="rgba(255, 255, 255, 0.7)"
          />
        </View>
      </LinearGradient>
    </View>
  )
}

export default CaloriesIntakeWidget

const styles = StyleSheet.create({
  widgetContainer: {
    flex: 1,
  },
  widgetHeader: {
    flexDirection: "row",
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
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 10,
    gap: 12,
    justifyContent: "center",
  },
  macrosRow: {
    flexDirection: "row",
    gap: 20,
  },
  block: {
    gap: 4,
    flex: 1,
    alignItems: "center",
  },
  macroName: {
    fontSize: 13,
    color: "#fff",
  },
  progressContainer: {
    width: "80%",
    height: 4,
    backgroundColor: "#fff",
    borderRadius: 30,
    position: "relative",
    overflow: "hidden",
  },
  progressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
  },
  macroCount: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
  calories: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "500",
    color: "#fff",
    paddingTop: 4,
  },
  waterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  waterText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
  },
  calcContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingRight: 6,
  },
  liters: {
    fontSize: 32,
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
  },
})
