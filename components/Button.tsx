import React from 'react'
import cn from "classnames"

import { useSetRecoilState } from 'recoil'
import { contentState } from '../atoms/allAtoms'

type Props = {
  wording: string,
  isFilled?: boolean
}

const Button = (props: Props) => {
  const { wording, isFilled = false } = props
  const setContentState = useSetRecoilState(contentState)

  const handleClick = () => {
    setContentState({
      isBattle: true,
      showRule: false,
    })
  }

  const buttonClassname = cn(
    "px-5 py-3 rounded-lg",
    {"bg-white text-[#4054b0]" : isFilled},
    {"border-white border text-white": !isFilled}
  )

  return (
    <div className={buttonClassname} onClick={handleClick}>{wording}</div>
  )
}

export default Button