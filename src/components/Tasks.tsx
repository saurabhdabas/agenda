import React from 'react'
import { ITask } from '../interfaces/task';
import SingleTask from './SingleTask';

interface Props {
  tasks:ITask[],
  completedTasks:ITask[],
  deleteTask:(id:number) => void,
  completeTask: (id:number) => void
}

const Tasks:React.FC<Props> = ({tasks,completedTasks,deleteTask,completeTask}) => {
  return (
    <div className="container">
      <div className="container__active-tasks">
        <h2>ACTIVE TASKS</h2>
        {tasks?.map((action, index) => (
          console.log("action",action),
          <SingleTask
            key={action.id}
            id={action.id}
            task={action.task}
            isDone={action.isDone}
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
