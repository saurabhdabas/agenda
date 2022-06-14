import React, { useState} from 'react';
import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';
import { ITask } from './interfaces/task';
import { BsUiChecks } from 'react-icons/bs';



const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);

  
  
  const deleteTask = (id: number) => {
    console.log("Delete Btn clicked");
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const completeTask = (id: number) => {
    tasks.filter((task)=>{
      if(task.id === id){
        
        setCompletedTasks([...completedTasks,{id:task.id, task: task.task, isDone: true}]);
      }
    })
    setTasks(tasks.filter((task) => task.id !== id));
  }

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
      <Tasks tasks={tasks} deleteTask={deleteTask} completedTasks={completedTasks} completeTask={completeTask}/>
    </div>
  );
}

export default App;
