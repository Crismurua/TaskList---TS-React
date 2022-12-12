import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Task } from './interfaces/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

interface Props {
  title?: string;
}



function App({title}:Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Learn TypeScript',
      description: 'Learn TypeScript',
      completed: false,
    }
  ]);

  const getDate = () : number => new Date().getTime();

  const newTask = (task:Task) =>  setTasks([...tasks, {...task, id:getDate(), completed:false}]);

  const deleteTask = (id:number) => setTasks(tasks.filter(task => task.id !== id));
  
 
  return (
    <div className="bg-dark  text-white">
      <nav className='navbar navbar-dark bg-info'>
        <div className='container'>
          <a href='/' className='navbar-brand'>
            <img src={logo} alt='logo' style={{width: '4rem'}}/>
            {title}
          </a> 
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm newTask={newTask}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
