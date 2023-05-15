import { StyleSheet, View, TouchableOpacity, Image } from "react-native"
import { useGallery } from "../hooks/useGallery"
import { FontAwesome } from "@expo/vector-icons"
import { useEffect } from "react"
import { handleInputProp } from "../utils/types"

type Props = {
  handleChange: handleInputProp
  value: string
}

const ImagePicker = ({ value, handleChange }: Props) => {
  const { image, pickImage } = useGallery()

  useEffect(() => {
    if (image !== null) {
      handleChange(image)
    }
  }, [image])

  return (
    <TouchableOpacity onPress={pickImage} style={styles.container}>
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          style={styles.logo}
        />
      ) : (
        <View style={styles.background}>
          <FontAwesome name="plus" size={30} color="white" />
        </View>
      )}
    </TouchableOpacity>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
  container: {
    padding: 6,
    margin: 10,
  },
  background: {
    backgroundColor: "#C5C5C5",
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  logo: {
    borderRadius: 50,
    height: 60,
    width: 60,
    resizeMode: "cover",
  },
})
