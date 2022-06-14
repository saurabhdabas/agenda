import React from 'react';
import './styles.css';
// import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
interface Props {
    id:number,
    task:string,
    isDone:boolean
}

const singleTask: React.FC<Props> = ({id, task, isDone}) => {
  return (
    <div className="task">
      <div className="task__description">{task}</div>
      <div>{isDone ?  ""  :<BsPatchCheckFill/>}</div>
    </div>
  )
}

export default singleTask;
