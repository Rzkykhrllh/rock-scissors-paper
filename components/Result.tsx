import React from 'react'
import HandButton from '../components/HandButton'
import Button from '../components/Button'

import { useRecoilValue } from 'recoil'
import { contentState, handState } from '../atoms/allAtoms'

type Props = {}

function Result({}: Props) {
  const handConditionState = useRecoilValue(handState)
  let resultWording = null

  const resultProcess = () => {
    const result = getResult()
    if (result === 0 ) resultWording = "DRAW"
    else if (result > 0 ) resultWording = "YOU WIN"
    else resultWording = "YOU LOSE"
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

  resultProcess()

  return (
    <div className='flex justify-between sm:w-[640px] px-3 text-center'>
      <div>
        <p className='mb-6'>YOU PICKED</p>
        <HandButton type={handConditionState?.playerHand} disabled/>
      </div>
      <div className='flex flex-col justify-center'>
        <p className='mb-6 text-[30px]'>{resultWording}</p>
        <Button wording="PLAY AGAIN" isFilled/>
      </div>
      <div>
        <p className='mb-6'>THE HOUSE PICKED</p>
        <HandButton type={handConditionState?.enemyHand} disabled/>
      </div>
    </div>
  )
}

export default Result