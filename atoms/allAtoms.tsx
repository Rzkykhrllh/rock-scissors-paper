import { atom } from 'recoil'

export const contentState = atom<Object>({
  key: "contentType",
  default: {
    isBattle: true,
    showRule: false
  }
})

export const handState =  atom<Object>({
  key: "handState",
  default: {
    playerHand: null,
    enemyHand: null
  }
})