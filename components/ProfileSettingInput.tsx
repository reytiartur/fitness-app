import { StyleSheet } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import ProfileModal from "./ProfileModal"
import { useState } from "react"
import { Props } from "../utils/types"
import ProfileSetting from "./ProfileSetting"

const ProfileSettingInput = <T extends string | number | null>({
  input,
  name,
  setInputs,
  setter,
  objName,
  value,
}: Props<T>) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleChange = (text: string) => {
    setInputs((prevState) => ({ ...prevState, [objName]: text }))
  }

  return (
    <>
      <ProfileSetting value={value} name={name} setOpen={setOpen} />

      <ProfileModal
        setOpen={setOpen}
        open={open}
        value={input}
        category={name}
        setter={setter}
      >
        <TextInput
          keyboardType="default"
          style={styles.input}
          autoFocus={true}
          value={input ? input.toString() : ""}
          onChangeText={(text) => handleChange(text)}
        />
      </ProfileModal>
    </>
  )
}

export default ProfileSettingInput

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#C5C5C5",
  },
  text: {
    color: "#a7a7a7",
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
  },
  input: {
    width: "100%",
    height: 30,
    fontSize: 20,
    paddingHorizontal: 20,
    marginVertical: 6,
  },
})
