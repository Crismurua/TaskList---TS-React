import React from 'react'
import {Task} from '../interfaces/Task';
import TaskCard from './TaskCard';

interface Props {
    tasks: Task[];
    deleteTask: (id:number) => void;
}

function TaskList({tasks, deleteTask} : Props) {
  return (
    <>
    {tasks.map(t => (
        <div className="col-md-3 pb-2" key={t.id}>
            <TaskCard key={t.id} task={t} deleteTask={deleteTask}/>
        </div>
      ))}
    </>  
  )
}

export default TaskList