import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from "../assets/logo.svg"
import Button from '../components/Button'

import bg_triangle from "../assets/bg-triangle.svg"

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

      <div className='w-[440px] h-[410px] relative bg-[url("/bg-triangle.svg")] bg-no-repeat bg-center'>
        <Button type="paper" className="absolute top-0 left-0"/>
        <Button type="scissors" className="absolute top-0 right-0"/>
        <Button type="rock" className="absolute bottom-0 left-[50%] translate-x-[-50%]"/>
      </div>
     
     <footer>
      footer
     </footer>
    </div>
  )
}

export default Home
