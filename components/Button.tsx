import React from 'react'
import cn from "classnames"

import { useSetRecoilState } from 'recoil'
import { contentState } from '../atoms/allAtoms'

type Props = {
  wording: string,
  isFilled?: boolean,
  className?: string
  oncClick: () => void
}

const Button = (props: Props) => {
  const { wording, isFilled = false, className, oncClick } = props

  const buttonClassname = cn(
    className,
    "px-5 py-3 rounded-lg",
    {"bg-white text-[#4054b0]" : isFilled},
    {"border-white border text-white": !isFilled}
  )

  return (
    <div className={buttonClassname} onClick={oncClick}>{wording}</div>
  )
}

export default Button