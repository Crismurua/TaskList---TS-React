import {ChangeEvent, FormEvent, useState, useRef} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import { Task } from '../interfaces/Task';

interface Props {
    newTask: (task:Task) => void;
}

type Input = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>;

const initialState = {
    title: '',
    description: '',
};

function TaskForm({newTask} : Props) {
    const [task, setTask] = useState(initialState);
    const title = useRef<HTMLInputElement>(null)
    
    const handleInput = ({target: {name, value}}: Input) => {
            setTask({...task, [name] : value})
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        newTask(task);
        setTask(initialState);
        title.current?.focus();
    }

  return (
    <div className='card card-body bg-secondary'>
        <h1>Add</h1>
        <form onSubmit={handleSubmit}>
            <input type={'text'} 
                    placeholder='Title?' 
                    name='title' 
                    className='form-control mb-3 rounded-0 border-0 shadow-none'
                    onChange={handleInput}
                    value={task.title}
                    autoFocus
                    ref={title}
                    />

            <textarea name='description' 
                        rows={2} 
                        placeholder='Description?' 
                        className='form-control mb-3 shadow-none border-0'
                        onChange={handleInput}
                        value={task.description}
                        ></textarea>
            <button className='btn btn-info'>Add <AiOutlinePlus /></button>        
        </form>
    </div>
  )
}

export default TaskForm