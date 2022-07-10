import { atom } from "recoil"

export const activeMenuState = atom<boolean>({
  key: "activeMenuState",
  default: true,
})
