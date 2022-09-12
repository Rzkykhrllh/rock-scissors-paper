import type { NextPage } from 'next'

import { useRecoilValue } from 'recoil'
import { contentState, handState, scoreState } from '../atoms/allAtoms'
import Battle from '../components/Battle'
import Result from '../components/Result'
import Score from '../components/Score'

const Home: NextPage = () => {
  const contentTypeState = useRecoilValue(contentState)
  const score = useRecoilValue(scoreState)

  console.log("content Type:", contentTypeState)

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
      
      <footer>
        footer
      </footer>
    </div>
  )
}

export default Home
