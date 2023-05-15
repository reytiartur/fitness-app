import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { handleInputProp } from "../utils/types"

type Props = {
  data: string[]
  handleChange: handleInputProp
  value: string
}

const RadioSelector = ({ data, value, handleChange }: Props) => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.row}
          onPress={() => handleChange(item)}
        >
          <Text style={styles.text}>{item}</Text>
          <View style={styles.radio}>
            {item === value ? <View style={styles.selected} /> : null}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default RadioSelector

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    gap: 6,
    paddingVertical: 6,
  },
  row: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#edaf51",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
  },
  selected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#edaf51",
  },
})
