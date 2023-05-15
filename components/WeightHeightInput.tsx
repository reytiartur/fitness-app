import { StyleSheet, View } from "react-native"
import WheelPickerExpo from "react-native-wheel-picker-expo"
import { Inputs } from "../utils/types"
import { ItemType } from "react-native-wheel-picker-expo/lib/typescript/types"
import { useEffect, useState } from "react"

type Props = {
  type: "weight" | "height"
  setInputs: React.Dispatch<React.SetStateAction<Inputs>>
  value: number
  objName: string
}

const WeightHeightInput = ({ type, setInputs, value, objName }: Props) => {
  let mainNum: number[] = []
  let secNum = Array.from({ length: 10 }, (value, index) => index)
  const [integer, setInteger] = useState<string | number>("")
  const [float, setFloat] = useState<string | number>("")

  if (type === "weight") {
    mainNum = Array.from(
      { length: (200 - 40) / 1 + 1 },
      (value, index) => 40 + index * 1
    )
  } else if (type === "height") {
    mainNum = Array.from(
      { length: (220 - 130) / 1 + 1 },
      (value, index) => 130 + index * 1
    )
  }

  useEffect(() => {
    if (!value) {
      if (type === "weight") {
        setInteger(65)
      } else if (type === "height") {
        setInteger(175)
      }
      setFloat(0)
    } else {
      const [integer, float] = value.toString().split(".")
      setInteger(integer)
      setFloat(float)
    }
  }, [value])

  const handleChange = (item: ItemType) => {
    let { value, label } = item
    if (value === "integer") {
      setInteger(label)
    } else if (value === "float") {
      setFloat(label)
    }
    let newValue = `${Math.floor(+integer!)}.${float}`
    setInputs((prevState) => ({
      ...prevState,
      [objName]: parseFloat(newValue),
    }))
  }

  return (
    <View style={styles.container}>
      <WheelPickerExpo
        height={300}
        width={150}
        initialSelectedIndex={mainNum.indexOf(+integer!)}
        haptics={true}
        items={mainNum?.map((num) => ({
          label: num.toString(),
          value: "integer",
        }))}
        onChange={({ item }) => handleChange(item)}
      />
      <WheelPickerExpo
        height={300}
        width={150}
        initialSelectedIndex={secNum.indexOf(+float!)}
        haptics={true}
        items={secNum.map((num) => ({
          label: num.toString(),
          value: "float",
        }))}
        onChange={({ item }) => handleChange(item)}
      />
    </View>
  )
}

export default WeightHeightInput

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
})
