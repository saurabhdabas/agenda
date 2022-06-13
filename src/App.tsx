import React, { useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Task } from './model/task';

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

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
      <InputField task={task} setTask={setTask} addTask={addTask}/>
      {tasks.map((item)=>{
        return (
          <div>{item.task}</div>
        )
      })}
    </div>
  );
}

export default App;
