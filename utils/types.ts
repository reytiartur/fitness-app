import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

export type Inputs = {
  name: string | null
  img: string | null
  gender: string | null
  age: string | null
  weight: number | null
  height: number | null
  userProfile: boolean | null
}

export type UserAction<T> =
  | ActionCreatorWithPayload<T | null, "user/setName">
  | ActionCreatorWithPayload<T | null, "user/setImage">
  | ActionCreatorWithPayload<T | null, "user/setGender">
  | ActionCreatorWithPayload<T | null, "user/setAge">
  | ActionCreatorWithPayload<T | null, "user/setWeight">
  | ActionCreatorWithPayload<T | null, "user/setHeight">

export type Props<T extends string | number | null> = {
  name: string
  input: T
  objName: string
  setter: UserAction<T | null>
  setInputs: React.Dispatch<React.SetStateAction<Inputs>>
  value: T
}

export type handleInputProp = (text: string | number) => void
