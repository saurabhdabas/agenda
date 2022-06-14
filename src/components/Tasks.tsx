import React from 'react'
import { ITask } from '../interfaces/task';
import SingleTask from './SingleTask';

interface Props {
  tasks:ITask[],
  edit:boolean,
  completedTasks:ITask[],
  editTask:(id:number) => void,
  deleteTask:(id:number) => void,
  completeTask: (id:number) => void,
  setEdit:(value: React.SetStateAction<boolean>) => void,
  setTasks:React.Dispatch<React.SetStateAction<ITask[]>>
}

const Tasks:React.FC<Props> = ({edit,tasks,completedTasks,deleteTask,completeTask,editTask,setTasks,setEdit}) => {
  return (
    <div className="container">
      <div className="container__active-tasks">
        <h2>ACTIVE TASKS</h2>
        {tasks?.map((action, index) => (
          console.log("action",action),
          <SingleTask
            key={action.id}
            id={action.id}
            edit={edit}
            task={action.task}
            setEdit={setEdit}
            tasks={tasks}
            isDone={action.isDone}
            setTasks={setTasks}
            editTask={editTask}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
          ))
        }
      </div>
      <div className="container__completed-tasks">
        <h2>COMPLETED TASKS</h2>
        {completedTasks?.map((action, index) => (
          console.log("action",action),
          <SingleTask
            key={action.id}
            id={action.id}
            task={action.task}
            isDone={action.isDone}
            edit={edit}
            tasks={tasks}
            setEdit={setEdit}
            editTask={editTask}
            setTasks={setTasks}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
          ))
        }
      </div>
    </div>
  )
}

export default Tasks;
