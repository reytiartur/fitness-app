import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { useDispatch } from "react-redux"

export interface UserState {
  name: string | null
  img: string | null
  gender: string | null
  age: string | null
  weight: number | null
  height: number | null
  userProfile: boolean
}

const initialState: UserState = {
  name: null,
  img: null,
  gender: null,
  age: null,
  weight: null,
  height: null,
  userProfile: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.img = action.payload
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload
    },
    setAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload
    },
    setWeight: (state, action: PayloadAction<number>) => {
      state.weight = action.payload
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload
    },
    setProfile: (state) => {
      state.userProfile = true
    },
  },
})

export const {
  setName,
  setImage,
  setGender,
  setAge,
  setWeight,
  setHeight,
  setProfile,
} = userSlice.actions
export type UserAction = ReturnType<
  (typeof userSlice.actions)[keyof typeof userSlice.actions]
>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default userSlice.reducer
