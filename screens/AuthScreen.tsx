import { Dimensions, StyleSheet } from "react-native"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"
import { DismissKeyboardView } from "../utils/DismissKeyboardHOC"

const ScreenHeight = Dimensions.get("window").height

const AuthScreen = () => {
  const [component, setComponent] = useState("SignIn")

  return (
    <LinearGradient
      colors={["#0a0a0a", "#454545"]}
      start={{ x: 0.3, y: 0 }}
      end={{ x: 0.8, y: 0.3 }}
      style={{ flex: 1 }}
    >
      <DismissKeyboardView style={{ flex: 1 }}>
        <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
          {component === "SignUp" ? (
            <SignUp styles={{ ...styles }} setComponent={setComponent} />
          ) : (
            <SignIn styles={{ ...styles }} setComponent={setComponent} />
          )}
        </SafeAreaView>
      </DismissKeyboardView>
    </LinearGradient>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 34,
    color: "#fff",
    width: "70%",
    fontWeight: "600",
    paddingLeft: 30,
  },
  authContainer: {
    flex: 3,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputsContainer: {
    marginTop: 38,
    marginBottom: 14,
    gap: 28,
  },
  renewPass: {
    color: "#edaf51",
    fontSize: 16,
    fontWeight: "500",
    alignSelf: "flex-end",
  },
  button: {
    width: "auto",
    height: ScreenHeight * 0.065,
    borderRadius: 12,
    overflow: "hidden",
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  navigateContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
  },
  navigateText: {
    fontSize: 16,
    color: "#a7a7a7",
  },
  loginContainer: {
    position: "relative",
    borderTopColor: "#e0e0e0",
    borderTopWidth: 1,
    flex: 1,
    justifyContent: "center",
  },
  loginText: {
    position: "absolute",
    top: -10,
    backgroundColor: "#fff",
    paddingHorizontal: 6,
    fontSize: 15,
    color: "#e0e0e0",
    alignSelf: "center",
  },
  providerBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
})
