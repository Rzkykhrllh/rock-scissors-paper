import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from "../assets/logo.svg"
import HandButton from '../components/HandButton'

import bg_triangle from "../assets/bg-triangle.svg"
import Button from '../components/Button'

const Home: NextPage = () => {
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
      {/* <div className='sm:w-[440px] sm:h-[410px] w-[290px] h-[262px] relative bg-[url("/bg-triangle.svg")] bg-no-repeat bg-center'>
        <HandButton type="paper" className="absolute top-0 left-0"/>
        <HandButton type="scissors" className="absolute top-0 right-0"/>
        <HandButton type="rock" className="absolute bottom-0 left-[50%] translate-x-[-50%]"/>
      </div> */}

      {/* the result */}
      <div className='flex justify-between sm:w-[640px] bg-red-400 px-3 text-center'>
          <div>
            <p>Your Hand</p>
            <HandButton type="paper" disabled/>
          </div>
        <div>
          YOU WIN
          <Button wording="PLAY AGAIN" isFilled/>
        </div>
        <div>
          <p>OPPONENTS HAND</p>
          <HandButton type="paper" disabled/>
        </div>
      </div>
      
     <footer>
      footer
     </footer>
    </div>
  )
}

export default Home
