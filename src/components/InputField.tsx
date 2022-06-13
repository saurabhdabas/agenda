import React from 'react'
import "./styles.css";

interface Props {
  task : string,
  setTask : React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({ task, setTask}) => {

  return (
    <form className = "user-input" >
      <input className = "user-input__box" type="input" placeholder='Add a task to get started' value={task} onChange={(event)=>setTask(event.target.value)}/>
      <button className="user-input__submit" type="submit">+</button>
    </form>
  )
}

export default InputField;
