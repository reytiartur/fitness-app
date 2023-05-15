import { useState } from "react"
import * as ImagePicker from "expo-image-picker"

export const useGallery = () => {
  const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return { pickImage, image }
}
