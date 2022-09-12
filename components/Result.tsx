import React, { useEffect, useState } from 'react'
import HandButton from '../components/HandButton'
import Button from '../components/Button'

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { handState, scoreState } from '../atoms/allAtoms'

type Props = {}

function Result({}: Props) {
  const handConditionState = useRecoilValue(handState)
  const [score, setScore] = useRecoilState(scoreState)
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

  useEffect(() => {
    resultProcess()
  }, [])
  
  return (
    <div className='flex justify-between sm:w-[640px] px-3 text-center'>
      <div>
        <p className='mb-6 text-white'>YOU PICKED</p>
        <HandButton type={handConditionState?.playerHand} disabled/>
      </div>
      <div className='flex flex-col justify-center'>
        <p className='mb-6 text-[30px] text-white'>{resultWording}</p>
        <Button wording="PLAY AGAIN" isFilled/>
      </div>
      <div>
        <p className='mb-6 text-white'>THE HOUSE PICKED</p>
        <HandButton type={handConditionState?.enemyHand} disabled/>
      </div>
    </div>
  )
}

export default Result