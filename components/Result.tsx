import React from 'react'
import HandButton from '../components/HandButton'
import Button from '../components/Button'

import { useRecoilValue } from 'recoil'
import { contentState, handState } from '../atoms/allAtoms'

type Props = {}

function Result({}: Props) {
  const handConditionState = useRecoilValue(handState)

  return (
    <div className='flex justify-between sm:w-[640px] bg-red-400 px-3 text-center'>
      <div>
        <p>Your Hand</p>
        <HandButton type={handConditionState?.playerHand} disabled/>
      </div>
      <div>
        YOU WIN
        <Button wording="PLAY AGAIN" isFilled/>
      </div>
      <div>
        <p>OPPONENTS HAND</p>
        <HandButton type={handConditionState?.enemyHand} disabled/>
      </div>
    </div>
  )
}

export default Result