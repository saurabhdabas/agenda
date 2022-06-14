import React, { ChangeEvent, useRef } from 'react'
import "./styles.css";

interface Props {
  task : string,
  setTask : React.Dispatch<React.SetStateAction<string>>
  addTask: (e: React.FormEvent) => void;
}

const Form: React.FC<Props> = ({ task, setTask, addTask}) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) : void => {
    setTask(event.target.value)
  }

  return (
    <form className = "user-input" onSubmit={
      (event)=>{addTask(event)
      inputRef.current?.blur()
      }}>
      <input className = "user-input__box" type="input" placeholder='Add a task to get started' value={task} onChange={handleChange} ref={inputRef}/>
      <button className="user-input__submit" type="submit">➕</button>
    </form>
  )
}

export default Form;
