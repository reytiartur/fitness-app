import { StyleSheet } from "react-native"
import { useState } from "react"
import { Props } from "../utils/types"
import ProfileSetting from "./ProfileSetting"
import ProfileModal from "./ProfileModal"
import RadioSelector from "./RadioSelector"

const ProfileSettingRadio = <T extends string | number | null>({
  input,
  name,
  setInputs,
  setter,
  objName,
  value,
}: Props<T>) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleChange = (text: string | number) => {
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
        <RadioSelector
          data={["Male", "Female"]}
          handleChange={handleChange}
          value={input ? input.toString() : ""}
        />
      </ProfileModal>
    </>
  )
}

export default ProfileSettingRadio

const styles = StyleSheet.create({})
