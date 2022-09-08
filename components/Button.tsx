import React from 'react'
import cn from "classnames"

type Props = {
  wording: string,
  isFilled?: boolean
}

const Button = (props: Props) => {
  const { wording, isFilled = false } = props

  const buttonClassname = cn(
    "px-5 py-3 rounded-lg",
    {"bg-white text-[#4054b0]" : isFilled},
    {"border-white border text-white": !isFilled}
  )

  return (
    <div className={buttonClassname}>{wording}</div>
  )
}

export default Button