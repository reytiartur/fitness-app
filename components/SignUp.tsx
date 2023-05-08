import {
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { useState } from "react"
import AuthInput from "./AuthInput"
import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView } from "react-native-safe-area-context"
import { createUserWithEmail } from "../utils/firebase"
import useAuth from "../hooks/useAuth"


type Props = {
  styles: any
  setComponent: React.Dispatch<React.SetStateAction<string>>
}

const SignUp = ({ styles, setComponent }: Props) => {
  const { saveToken } = useAuth()
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  })

  const handleChange = (name: string, text: string) => {
    setInputs({ ...inputs, [name]: text })
  }

  const handleSubmit = async (e: NativeSyntheticEvent<Object>) => {
    e.preventDefault()
    const token = await createUserWithEmail(
      inputs.email,
      inputs.password,
      inputs.repeatPassword
    )
    if (token) {
      saveToken(token)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sign Up for Free</Text>
      </View>

      <View style={styles.authContainer}>
        <View style={styles.inputsContainer}>
          <AuthInput
            label="Email"
            textContentType="emailAddress"
            id="email"
            onChangeText={(text) => handleChange("email", text)}
          />
          <AuthInput
            label="Password"
            textContentType="password"
            secureTextEntry={true}
            id="password"
            onChangeText={(text) => handleChange("password", text)}
          />
          <AuthInput
            label="Repeat Password"
            textContentType="password"
            secureTextEntry={true}
            id="repeatPassword"
            onChangeText={(text) => handleChange("repeatPasswrod", text)}
          />
        </View>

        <View style={{ flex: 1, paddingTop: 40 }}>
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
              <Text style={styles.btnText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <SafeAreaView style={styles.navigateContainer}>
          <Text style={styles.navigateText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => setComponent("signIn")}>
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
              Sign In.
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  )
}

export default SignUp
