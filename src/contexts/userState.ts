import { atom, SetterOrUpdater } from "recoil"

export type UserStateType = {
  chat: boolean
  cart: boolean
  userProfile: boolean
  notification: boolean
}
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const userState = atom<UserStateType>({
  key: "userState",
  default: initialState,
})
export const clickedState = atom<UserStateType>({
  key: "clickedState",
  default: initialState,
})

export const handleClick = (set: SetterOrUpdater<UserStateType>, clicked: keyof UserStateType) =>
  set({ ...initialState, [clicked]: true })
