import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from "../assets/logo.svg"

import { useRecoilValue } from 'recoil'
import { contentState, handState, scoreState } from '../atoms/allAtoms'

type Props = {}

function Score({}: Props) {
  const score = useRecoilValue(scoreState)

  return (
    <div id='header' className='flex px-6 py-3 border rounded max-w-[50%] w-full justify-between'>
      <Image src={logo}/>
      <div className='flex flex-col justify-center px-6 py-3 text-base border rounded bg-slate-100'>
        <p className='text-[#2a46c0]'>SCORE</p>
        <div className='text-[44px] text-[#3b4363] h-content text-center py-2'>{score}</div>
      </div>
    </div>
  )
}

export default Score