import Image from 'next/image'
import React from 'react'
import cn from "classnames"

import icon_scissors from "../assets/icon-scissors.svg"
import icon_paper from "../assets/icon-paper.svg"
import icon_rock from "../assets/icon-rock.svg"

type Props = {
  type: string
}

const Button = (props: Props) => {
  const { type = "rock" } = props

  const buttonCn = cn(
    "bg-gradient-to-b p-5 rounded-full lg:w-60 lg:h-60 active:translate-y-[10px] active:shadow-none", 
    {"from-[#f6b948] to-[#EB9E0E] shadow-[0px_10px_#C76B1E]" : type === "scissors"},
    {"from-[#5972F3] to-[#4665F4] shadow-[0px_10px_#2E45B2]" : type === "paper"},
    {"from-[#D64360] to-[#DA2D52] shadow-[0px_10px_#9F1636]" : type === "rock"},
  )

  const imageType = 
    type === "paper" ? icon_paper :
    type === "scissors" ? icon_scissors :
    icon_rock

  console.log(imageType)


  return (
    <button className={buttonCn}>
      <div className='flex items-center justify-center w-full h-full bg-white rounded-full shadow-[inset_0px_10px_#BBBDCC]'>
        <Image src={imageType} height={100} width={100}/>
      </div>
    </button>
  )
}

export default Button