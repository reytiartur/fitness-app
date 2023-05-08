import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native"
import { ComponentPropsWithoutRef } from "react"

const ScreenHeight = Dimensions.get("window").height

type LabelProps = {
  label: string
}

type InputProps = LabelProps & ComponentPropsWithoutRef<typeof TextInput>

const AuthInput = ({ label, textContentType, ...props }: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        numberOfLines={1}
        selectionColor={"#edaf51"}
        returnKeyType="done"
        textContentType={textContentType}
        {...props}
      />
    </View>
  )
}

export default AuthInput

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  label: {
    position: "absolute",
    top: -10,
    left: 10,
    backgroundColor: "#fff",
    zIndex: 10,
    paddingHorizontal: 5,
    color: "#e0e0e0",
    fontWeight: "500",
    fontSize: 15,
  },
  input: {
    width: "auto",
    height: ScreenHeight * 0.065,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    fontSize: 20,
    paddingLeft: 16,
  },
})
