import { StyleSheet } from "react-native"
import { useState } from "react"
import ProfileModal from "./ProfileModal"
import ProfileSetting from "./ProfileSetting"
import { Props } from "../utils/types"
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker"

const ProfileSettingDate = <T extends string | number | null>({
  input,
  name,
  setInputs,
  setter,
  objName,
  value,
}: Props<T>) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleChange = (event: DateTimePickerEvent, date: Date | undefined) => {
    if (date !== undefined) {
      setInputs((prevState) => ({
        ...prevState,
        [objName]: date.toDateString(),
      }))
    }
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
        <DateTimePicker
          display="spinner"
          value={input ? new Date(input) : new Date()}
          onChange={handleChange}
          minimumDate={new Date(1950, 0, 1)}
        />
      </ProfileModal>
    </>
  )
}

export default ProfileSettingDate

const styles = StyleSheet.create({})
