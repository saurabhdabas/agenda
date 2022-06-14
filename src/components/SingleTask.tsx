import React from 'react';
import './styles.css';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
interface Props {
    id:number,
    task:string,
    isDone:boolean,
    deleteTask:(id:number) => void
}

const singleTask: React.FC<Props> = ({id, task, isDone,deleteTask}) => {
  return (
    <div className="task">
      <div className="task__description">
        {task}
      </div>
      <div className="task__icons">
      <div>
        {isDone ?  ""  :<AiFillEdit/>}
      </div>
      <div>
        {isDone ? "" : <AiFillDelete onClick={()=>deleteTask(id)}/>}
      </div>
      <div>
        {isDone ?  ""  :<BsPatchCheckFill/>}
      </div>
      </div>
    </div>
  )
}

export default singleTask;
