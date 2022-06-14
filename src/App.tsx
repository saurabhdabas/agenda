import React, { useState} from 'react';
import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';
import { ITask } from './interfaces/task';
import { BsUiChecks } from 'react-icons/bs';



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
      <div className='heading'>
        <BsUiChecks/>
        <h4>DAILY PLANNER</h4>
      </div>
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
