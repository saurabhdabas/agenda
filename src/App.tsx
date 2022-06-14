import React, { useState} from 'react';
import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';
import { ITask } from './interfaces/task';




const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [completed, setCompleted] = useState<boolean>(false);

  const addTask = (event:React.FormEvent) => {
    event.preventDefault();
    if(task) {
      setTasks([...tasks,{id: Date.now(),task: task, isDone: false}]);
      setTask("");
    }
  }

  return (
    <div className="App">
      <span className='heading'>DAILY PLANNER</span>
      <Form task={task} setTask={setTask} addTask={addTask}/>
      <Tasks tasks={tasks}/>
      {/* {tasks.map((item)=>{
        return (
          <div>{item.task}</div>
        )
      })} */}
    </div>
  );
}

export default App;
