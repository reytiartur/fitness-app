import { View, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {
  setAge,
  setGender,
  setHeight,
  setImage,
  setName,
  setWeight,
  setProfile,
  useAppDispatch,
  useAppSelector,
} from "../features/userSlice"
import { TouchableOpacity } from "react-native-gesture-handler"
import { DismissKeyboardView } from "../utils/DismissKeyboardHOC"
import { useState } from "react"
import ProfileSettingInput from "../components/ProfileSettingInput"
import { Inputs, UserAction } from "../utils/types"
import ProfileSettingImage from "../components/ProfileSettingImage"
import ProfileSettingRadio from "../components/ProfileSettingRadio"
import ProfileSettingDate from "../components/ProfileSettingDate"
import ProfileSettingWheel from "../components/ProfileSettingWheel"
import { ParamListBase, useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export const ProfileSettingScreen = () => {
  const { name, img, gender, age, weight, height, userProfile } =
    useAppSelector((state) => state.user)
  const [inputs, setInputs] = useState<Inputs>({
    name,
    img,
    gender,
    age: age ?? new Date().toDateString(),
    weight,
    height,
    userProfile: userProfile || null,
  })

  const dispatch = useAppDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  const handleSubmit = () => {
    if (!userProfile) {
      dispatch(setProfile())
    }
    navigation.navigate("HomeScreen", { screen: "Home" })
  }

  return (
    <DismissKeyboardView>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.header}>
            {userProfile
              ? "Your body parameters"
              : "Let's set up your Profile!"}
          </Text>
          <ProfileSettingInput
            name="name"
            setter={setName as UserAction<string>}
            input={inputs.name}
            setInputs={setInputs}
            objName="name"
            value={name}
          />
          <ProfileSettingImage
            name="image"
            setter={setImage as UserAction<string>}
            input={inputs.img}
            setInputs={setInputs}
            objName="img"
            value={img}
          />
          <ProfileSettingRadio
            setter={setGender as UserAction<string>}
            input={inputs.gender}
            setInputs={setInputs}
            objName="gender"
            value={gender}
            name="gender"
          />
          <ProfileSettingDate
            setter={setAge as UserAction<string>}
            input={inputs.age}
            setInputs={setInputs}
            objName="age"
            value={age}
            name="date of birth"
          />
          <ProfileSettingWheel
            setter={setHeight as UserAction<number>}
            input={inputs.height}
            setInputs={setInputs}
            objName="height"
            value={height}
            name="height"
            type="height"
          />
          <ProfileSettingWheel
            setter={setWeight as UserAction<number>}
            input={inputs.weight}
            setInputs={setInputs}
            objName="weight"
            value={weight}
            name="weight"
            type="weight"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>{!userProfile ? "Submit" : "Done"}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </DismissKeyboardView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
  },
  header: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 30,
    fontSize: 20,
    paddingHorizontal: 20,
    marginVertical: 6,
  },
  button: {
    padding: 14,
    backgroundColor: "#edaf51",
    borderRadius: 14,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
  },
})
