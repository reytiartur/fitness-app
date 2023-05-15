import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from "react-native"
import { ReactElement } from "react"
import { useAppDispatch, useAppSelector } from "../features/userSlice"
import { UserAction } from "../utils/types"

const ScreenWidth = Dimensions.get("window").width

type Props<T extends string | number | null> = {
  setter: UserAction<T>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  value: T
  category: string
  open: boolean
  children: ReactElement
}

const ProfileModal = <T extends string | number | null>({
  setOpen,
  open,
  value,
  category,
  setter,
  children,
}: Props<T>) => {
  const dispatch = useAppDispatch()
  const { userProfile } = useAppSelector((state) => state.user)

  const handleSubmit = () => {
    if (value !== null) {
      dispatch(setter(value))
      setOpen(false)
    }
  }

  return (
    <Modal
      visible={open}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setOpen(false)}
    >
      <TouchableWithoutFeedback onPressOut={() => setOpen(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <Text style={styles.text}>
              {userProfile ? "Update" : "Select"} your {category}
            </Text>
            {children}
            <View style={{ alignItems: "stretch", width: "90%" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.buttonText}>SAVE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ProfileModal

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0.0, 0.0, 0.0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    minWidth: ScreenWidth * 0.7,
    width: "max-content",
  },
  modal: {
    width: "80%",
    zIndex: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    marginTop: 10,
    backgroundColor: "#edaf51",
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  text: {
    color: "#a7a7a7",
    fontSize: 16,
  },
})
