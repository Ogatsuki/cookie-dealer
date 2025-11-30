import type { t__Props } from "./type";
const explains = [["text1-1", "text1-2", "text1-3"], ["text2-1", "text2-2", "text2-3"], ["text3-1", "text3-2", "text3-3"]];


const Explains: React.FC<t__Props> = ({level, step}) => {
  return (
    <div className="flex column flex-start">
      <h2>説明</h2>
      <p>{explains[level][step]}</p>  
    </div>
  )
}

export default Explains;