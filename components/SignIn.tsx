import {
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { useState } from "react"
import AuthInput from "./AuthInput"
import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView } from "react-native-safe-area-context"
import { AntDesign } from "@expo/vector-icons"
import { resetPassword, signInUserWithEmail } from "../utils/firebase"
import useAuth from "../hooks/useAuth"

type Props = {
  styles: any
  setComponent: React.Dispatch<React.SetStateAction<string>>
}

const SignIn = ({ styles, setComponent }: Props) => {
  const { saveToken } = useAuth()
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })

  const handleChange = (name: string, text: string) => {
    setInputs({ ...inputs, [name]: text })
  }

  const handleSubmit = async (e: NativeSyntheticEvent<Object>) => {
    e.preventDefault()
    const token = await signInUserWithEmail(inputs.email, inputs.password)
    if (token) {
      saveToken(token)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sign In to your Account</Text>
      </View>

      <View style={styles.authContainer}>
        <View style={styles.inputsContainer}>
          <AuthInput
            label="Email"
            textContentType="emailAddress"
            value={inputs.email}
            id="email"
            onChangeText={(text) => handleChange("email", text)}
          />
          <AuthInput
            label="Password"
            textContentType="password"
            secureTextEntry={true}
            value={inputs.password}
            id="password"
            onChangeText={(text) => handleChange("password", text)}
          />
        </View>

        <TouchableOpacity onPress={() => resetPassword(inputs.email)}>
          <Text style={styles.renewPass}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={(e) => handleSubmit(e)}
          >
            <LinearGradient
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              colors={["#f5c889", "#edaf51"]}
              end={{ x: 0.9, y: 0.9 }}
            >
              <Text style={styles.btnText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Or login with</Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              gap: 12,
              width: "auto",
            }}
          >
            {Platform.OS === "ios" ? (
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.providerBtn,
                  { backgroundColor: "#000" },
                ]}
                onPress={() =>
                  alert(
                    "Sorry, the Apple SignIn is not available at the moment. Please, create an account with your email and password."
                  )
                }
              >
                <AntDesign name="apple1" size={24} color="white" />
                <Text style={styles.btnText}>Sign in with Apple</Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity
              style={[
                styles.button,
                styles.providerBtn,
                { borderWidth: 1, borderColor: "#000" },
              ]}
              onPress={() =>
                alert(
                  "Sorry, the Google SignIn is not available at the moment. Please, create an account with your email and password."
                )
              }
            >
              <AntDesign name="google" size={24} color="#000" />
              <Text style={[styles.btnText, { color: "#000" }]}>
                Sign in with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <SafeAreaView
          style={styles.navigateContainer}
          edges={["bottom", "left", "right"]}
        >
          <Text style={styles.navigateText}>No account yet?</Text>
          <TouchableOpacity onPress={() => setComponent("SignUp")}>
            <Text
              style={[
                styles.navigateText,
                {
                  color: "#edaf51",
                  paddingHorizontal: 6,
                  fontWeight: "500",
                },
              ]}
            >
              Sign Up.
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})
