import { StyleSheet } from "react-native"
import { useState } from "react"
import { Props } from "../utils/types"
import ProfileSetting from "./ProfileSetting"
import ProfileModal from "./ProfileModal"
import WeightHeightInput from "./WeightHeightInput"

const ProfileSettingWheel = <T extends string | number | null>({
  input,
  name,
  setInputs,
  setter,
  objName,
  value,
  type,
}: Props<T> & {
  type: "weight" | "height"
}) => {
  const [open, setOpen] = useState<boolean>(false)

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
        <WeightHeightInput
          type={type}
          value={value as number}
          setInputs={setInputs}
          objName={objName}
        />
      </ProfileModal>
    </>
  )
}

export default ProfileSettingWheel

const styles = StyleSheet.create({})
