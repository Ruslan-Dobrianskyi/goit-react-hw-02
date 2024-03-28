import s from './Option.module.css'
const Option = ({ options, updateFeedback }) => {
  
  return (
    
    <div>
        {options.map(btn => (
          <button className={s.btn} onClick={() => updateFeedback(btn)} key={btn}>{btn}</button>
        ))}
          </div>
  )
}

export default Option