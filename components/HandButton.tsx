import Image from 'next/image'
import React from 'react'
import cn from "classnames"

import icon_scissors from "../assets/icon-scissors.svg"
import icon_paper from "../assets/icon-paper.svg"
import icon_rock from "../assets/icon-rock.svg"
import { useSetRecoilState } from 'recoil'
import { contentState, handState } from '../atoms/allAtoms'

type Props = {
  type: string
  className?: string
  disabled?: boolean
}

const HandButton = (props: Props) => {
  const { type = "rock", className, disabled = false } = props
  const setContentState = useSetRecoilState(contentState)
  const setHandtState = useSetRecoilState(handState)

  const getEnemyHand = () => {
    const hands = ["rock", "paper", "scissors"]

    const enemyIndex = Math.floor(Math.random() * 3);
    console.log("enemy hands:", hands[enemyIndex])

    return hands[enemyIndex]

  }

  const handleClick = () => {

    const enemyHand = getEnemyHand()

    setHandtState({
      playerHand: type,
      enemyHand: enemyHand
    })

    // Gimana caranya make previos value statenya
    setContentState({
      isBattle: false,
      showRule: false,
    })
  }

  const HandButtonCn = cn(
    className,
    `bg-gradient-to-b sm:p-5 p-2.5 rounded-full w-[118px] h-[118px] sm:w-[182px] sm:h-[182px]`,
    {"active:translate-y-[10px] active:shadow-none" : !disabled},
    {"from-[#f6b948] to-[#EB9E0E] sm:shadow-[0px_10px_#C76B1E] shadow-[0px_5px_#C76B1E]" : type === "scissors"},
    {"from-[#5972F3] to-[#4665F4] sm:shadow-[0px_10px_#2E45B2] shadow-[0px_5px_#2E45B2]" : type === "paper"},
    {"from-[#D64360] to-[#DA2D52] sm:shadow-[0px_10px_#9F1636] shadow-[0px_5px_#9F1636]" : type === "rock"},
  )

  const imageType = 
    type === "paper" ? icon_paper :
    type === "scissors" ? icon_scissors :
    icon_rock

  return (
    <button className={HandButtonCn} onClick={handleClick} disabled={disabled}>
      <div className='flex items-center justify-center w-full h-full bg-white rounded-full sm:shadow-[inset_0px_10px_#BBBDCC] shadow-[inset_0px_5px_#BBBDCC]'>
        <Image src={imageType} width={64} height={64} />
      </div>
    </button>
  )
}

export default HandButton