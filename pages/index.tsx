import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from "../assets/logo.svg"

import bg_triangle from "../assets/bg-triangle.svg"
import { useRecoilValue } from 'recoil'
import { contentState, handState } from '../atoms/allAtoms'
import Battle from '../components/Battle'
import Result from '../components/Result'

const Home: NextPage = () => {
  const contentTypeState = useRecoilValue(contentState)
  const handConditionState = useRecoilValue(handState)

  console.log("content Type:", contentTypeState)

  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-2 bg-gradient-radial">
      <div id='header' className='flex px-6 py-3 border rounded max-w-[50%] w-full justify-between'>
        <Image src={logo}/>
        <div className='flex flex-col justify-center px-6 py-3 text-base border rounded bg-slate-100'>
          <p className='text-[#2a46c0]'>Score</p>
          <div className='text-[44px] text-[#3b4363] bg-red-200 h-content'>1</div>
        </div>
      </div>

      {/* the game  */}
      {contentTypeState?.isBattle && (
        <Battle/>
      )}
      

      {/* the result */}
      {!contentTypeState?.isBattle && (
        <Result/>
      )}
      
     <footer>
      footer
     </footer>
    </div>
  )
}

export default Home
