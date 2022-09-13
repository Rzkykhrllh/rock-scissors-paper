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

export const scoreState = atom<number>({
  key: "scoreState",
  default: 0
})

export const modalState = atom<boolean>({
  key: "modalState",
  default: false
})