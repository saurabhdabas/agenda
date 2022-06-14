import React from 'react'
import { ITask } from '../interfaces/task';
import SingleTask from './SingleTask';

interface Props {
  tasks:ITask[],
  deleteTask:(id:number) => void
}

const Tasks:React.FC<Props> = ({tasks,deleteTask}) => {
  return (
    <div className="container">
      <div>
        {tasks?.map((action, index) => (
          <SingleTask
            key={action.id}
            id={action.id}
            task={action.task}
            isDone={action.isDone}
            deleteTask={deleteTask}
          />
          ))
        }
      </div>
    </div>
  )
}

export default Tasks;
