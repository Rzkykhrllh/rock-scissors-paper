import React, { useEffect, useState } from 'react'
import HandButton from '../components/HandButton'
import Button from '../components/Button'

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { handState, scoreState, contentState } from '../atoms/allAtoms'

type Props = {}

function Result({}: Props) {
  const handConditionState = useRecoilValue(handState)
  const [score, setScore] = useRecoilState(scoreState)
  const setContentState = useSetRecoilState(contentState)
  const [resultWording, setresultWording] = useState("")


  const resultProcess = () => {
    const result = getResult()
    if (result === 0 ) setresultWording("DRAW")
    else if (result > 0 ) setresultWording("YOU WIN")
    else setresultWording("YOU LOSE")

    setScore(score + result)
  }
    
  const getResult = () => {
    
    let result = -10;
    if (handConditionState.playerHand == handConditionState.enemyHand) {
      result = 0
      return result
    }
    
    
    switch (handConditionState.playerHand) {
      case "rock":
        if (handConditionState.enemyHand == "scissors") result = 1
        else result = -1
        break;
        
        case "paper":
          if (handConditionState.enemyHand == "rock") result = 1
          else result = -1
          break;
          
          case "scissors":
            if (handConditionState.enemyHand == "paper") result = 1
            else result = -1
        break;
        
        default:
          result = -10
          break;
    }
    
    console.log(result)
    return result
  }

  const handlePlayAgainClick = () => {
    setContentState({
      isBattle: true,
      showRule: false,
    })
  }

  useEffect(() => {
    resultProcess()
  }, [])
  
  return (
    <div className='flex justify-center sm:justify-between sm:w-[640px] px-3 text-center w-80 flex-wrap'>
      <div className='w-[140px] sm:w-max'>
        <p className='mb-6 text-sm text-white'>YOU PICKED</p>
        <HandButton type={handConditionState?.playerHand} disabled/>
      </div>
      <div className='flex flex-col flex-wrap justify-center order-last sm:order-none'>
        <p className='sm:mb-6 mb-2 mt-4 sm:mt-0 text-[30px] text-white text-lg sm:text-3xl'>{resultWording}</p>
        <Button wording="PLAY AGAIN" isFilled oncClick={handlePlayAgainClick}/>
      </div>
      <div className='w-[140px] sm:w-max'>
        <p className='mb-6 text-sm text-white'>THE HOUSE PICKED</p>
        <HandButton type={handConditionState?.enemyHand} disabled/>
      </div>
    </div>
  )
}

export default Result