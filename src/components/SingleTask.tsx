import React,{useState} from 'react';
import './styles.css';
import { ITask } from '../interfaces/task';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
interface Props {
  id:number,
  task:string,
  isDone:boolean,
  edit:boolean,
  tasks: ITask[],
  editTask:(id:number) => void,
  deleteTask:(id:number) => void,
  completeTask: (id:number) => void,
  setEdit:(value: React.SetStateAction<boolean>) => void,
  setTasks:React.Dispatch<React.SetStateAction<ITask[]>>
}

const SingleTask: React.FC<Props> = ({id, edit, task, tasks,isDone, setTasks, deleteTask, completeTask, editTask, setEdit}) => {

  const [editedTask, setEditedTask] = useState<string>(task);

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editedTask } : task))
    );
    setEdit(false);
  }

  return (
    <div className="task">
      <div className={isDone ? "task__description strike" : "task__description" }>
        
        {edit ? 
        <form onSubmit={handleSubmit}>
          <input
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="tasks__description"
          />
        </form>
        : task}

      </div>
      <div className="task__icons">
        <div>{isDone ? "" :<AiFillEdit onClick={()=>editTask(id)}/>}</div>
        <div><AiFillDelete onClick={()=>deleteTask(id)}/></div>
        <div>{isDone ? "" :<BsPatchCheckFill onClick={()=>completeTask(id)}/>}</div>
      </div>
    </div>
  )
}

export default SingleTask;
