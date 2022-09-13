import type { NextPage } from 'next'
import Image from 'next/image'

import { useRecoilState, useRecoilValue } from 'recoil'
import { contentState, handState, modalState, scoreState } from '../atoms/allAtoms'
import Battle from '../components/Battle'
import Result from '../components/Result'
import Score from '../components/Score'
import Button from '../components/Button'
import rule from "../assets/rules.svg"
import { RiCloseFill } from "react-icons/ri";

const Home: NextPage = () => {
  const contentTypeState = useRecoilValue(contentState)
  const [modal, setModal] = useRecoilState(modalState)

  const handleRuleButtonClick = () => {
    setModal(!modal)
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-2 bg-gradient-radial">
      <Score/>

      {/* the game  */}
      {contentTypeState?.isBattle && (
        <Battle/>
      )}
      
      {/* the result */}
      {!contentTypeState?.isBattle && (
        <Result/>
      )}

      <Button className='absolute px-6 font-light bottom-4 right-4' wording='RULE' oncClick={handleRuleButtonClick}/>

      {modal && (
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-10 rounded-2xl w-content h-content'>
          <RiCloseFill className='absolute text-lg text-gray-400 top-4 right-4 hover:cursor-pointer' onClick={handleRuleButtonClick}/>
          <Image src={rule}/>
        </div>
      )}
      
      <footer className='text-sm font-light text-white text-light' onClick={handleRuleButtonClick}>
        Submition of Frontend Mentor Chellenge by Airu
      </footer>
    </div>
  )
}

export default Home
