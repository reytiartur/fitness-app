import { StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useAppSelector } from "../features/userSlice"
import { Entypo } from "@expo/vector-icons"
import getAgeFnc from "../utils/getAgeFnc"

type Props = {
  value: string | number | boolean | null
  name: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileSetting = ({ value, name, setOpen }: Props) => {
  const { userProfile } = useAppSelector((state) => state.user)

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={() => setOpen(true)}>
        <Text style={styles.text}>
          {userProfile ? "Current" : "Set your"} {name}
        </Text>
        {name === "image" ? (
          value ? (
            <Entypo name="check" size={24} color="#edaf51" />
          ) : null
        ) : name === "date of birth" ? (
          value ? (
            <Text style={styles.value}>{getAgeFnc(value as string)}</Text>
          ) : null
        ) : (
          <Text style={styles.value}>{value}</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default ProfileSetting

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
})
