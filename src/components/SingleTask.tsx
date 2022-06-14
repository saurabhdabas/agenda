import React from 'react';
import './styles.css';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
interface Props {
    id:number,
    task:string,
    isDone:boolean,
    deleteTask:(id:number) => void
    completeTask: (id:number) => void

}

const singleTask: React.FC<Props> = ({id, task, isDone,deleteTask, completeTask}) => {
  return (
    <div className="task">
      <div className={isDone ? "task__description strike" : "task__description" }>{task}</div>
        <div className="task__icons">
        <div><AiFillEdit/></div>
        <div><AiFillDelete onClick={()=>deleteTask(id)}/></div>
        <div><BsPatchCheckFill onClick={()=>completeTask(id)}/></div>
      </div>
    </div>
  )
}

export default singleTask;
