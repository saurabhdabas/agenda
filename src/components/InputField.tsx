import React from 'react'
import "./styles.css";
const InputField: React.FC = () => {
  return (
    <form className = "user-input">
      <input className = "user-input__box" type="input" placeholder='Add a task to get started'/>
      <button className="user-input__submit" type="submit">+</button>
    </form>
  )
}

export default InputField;
