import { SetStateAction, useEffect, useState } from "react"
import * as SecureStore from "expo-secure-store"

const useAuth = () => {
  const [userToken, setUserToken] =
    useState<SetStateAction<null | string>>(null)

  const saveToken = async (value: string) => {
    await SecureStore.setItemAsync("token", value)
    setUserToken(value)
  }

  const getToken = async () => {
    let token = await SecureStore.getItemAsync("token")
    if (token) {
      setUserToken(token)
    } else {
      setUserToken(null)
    }
  }

  const deleteToken = async () => {
    SecureStore.deleteItemAsync("token")
    setUserToken(null)
  }

  useEffect(() => {
    getToken()
  }, [])

  return { userToken, setUserToken, saveToken, getToken, deleteToken }
}

export default useAuth
