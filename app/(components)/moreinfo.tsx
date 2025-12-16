import type { t__Props } from '../type.js'
import { detail } from '../context/gameContext.js'


const MoreInfo: React.FC<t__Props> = ({levelIndex, stepIndex}) => {
  return (
    <section className='mt-8'>
      <h2 className="sr-only">詳細情報</h2>
      <details>
        <summary className=''>技術詳細を見る</summary>
        <p>{detail[levelIndex][stepIndex]}</p>
      </details>
    </section>
  )
}


export default MoreInfo;