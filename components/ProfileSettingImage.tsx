import { StyleSheet } from "react-native"
import React, { useState } from "react"
import { Props } from "../utils/types"
import ProfileSetting from "./ProfileSetting"
import ImagePicker from "./ImagePicker"
import ProfileModal from "./ProfileModal"

const ProfileSettingImage = <T extends string | number | null>({
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
        <ImagePicker
          value={input ? input.toString() : ""}
          handleChange={handleChange}
        />
      </ProfileModal>
    </>
  )
}

export default ProfileSettingImage

const styles = StyleSheet.create({})
