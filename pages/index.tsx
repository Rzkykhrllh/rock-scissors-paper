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
      {contentTypeState.isBattle && (
        <Battle/>
      )}
      
      {/* the result */}
      {!contentTypeState.isBattle && (
        <Result/>
      )}

      <Button className='absolute px-6 font-light bottom-4 right-4' wording='RULE' oncClick={handleRuleButtonClick}/>

      {modal && (
        <div className='absolute top-0 bottom-0 left-0 right-0 inline-grid flex-col content-center justify-center w-full'>
          <div className='p-8 bg-white rounded-2xl w-[350px] relative '>
            <RiCloseFill className='absolute text-lg text-gray-400 top-4 right-4 hover:cursor-pointer' onClick={handleRuleButtonClick}/>
            <Image src={rule} width={304} height={"270px"} />
          </div>
        </div>
      )}
      
      <div className='text-sm font-light text-left text-white text-light' onClick={handleRuleButtonClick}>
        <p className='block w-full text-left'>Submition of Frontend Mentor Chellenge by Airu</p>
      </div>
    </div>
  )
}

export default Home
