import { atom } from 'recoil'

type TContentState = {
  isBattle: boolean,
  showRule: boolean,
}

type THandState = {
  playerHand: string | null,
  enemyHand: string | null,
}

export const contentState = atom<TContentState>({
  key: "contentType",
  default: {
    isBattle: true,
    showRule: false
  }
})

export const handState =  atom<THandState>({
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