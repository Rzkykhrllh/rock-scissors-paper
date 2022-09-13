import React from 'react'
import HandButton from '../components/HandButton'

type Props = {}

function Battle({}: Props) {
  return (
    <div className='sm:w-[440px] sm:h-[410px] w-[290px] h-[262px] relative sm:bg-[url("/bg-triangle.svg")] bg-[url("/bg-triangle-small.svg")] bg-no-repeat bg-center'>
      <HandButton type="paper" className="absolute top-0 left-0"/>
      <HandButton type="scissors" className="absolute top-0 right-0"/>
      <HandButton type="rock" className="absolute bottom-0 left-[50%] translate-x-[-50%]"/>
    </div>
  )
}

export default Battle