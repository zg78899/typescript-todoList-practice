import React,{FC, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/action/list.action';
import { setNotification } from '../store/action/notification.action';
import { List, Task } from '../store/types';

interface AddNewTaskProps{
  list: List
};


const AddNewTask:FC<AddNewTaskProps> = ({list}) =>{
const dispatch = useDispatch();
const [taskName,setTaskName] = useState('');

const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setTaskName(e.currentTarget.value);
};

const submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  
  const newTask: Task = {
    name: taskName,
    id: `task-${new Date().getTime()}`,
    completed:false
  };
  if(newTask.name === '') return;
  dispatch(addTask(newTask,list));
  dispatch(setNotification(`New task created(${newTask.name})`));
  setTaskName('');

}
  return (
    <section className="section">
      <h2 className="is-size-4 has-text-centered">Add new task to selected list</h2>
      <form id="task-form" onSubmit={submitHandler}>
        <div className="field">
          <label htmlFor="" className="label">Task Name</label>
          <div className="control">
            <input type="text" className="input" placeholder="Add Task" value={taskName} onChange={inputChangeHandler}/>
          </div>
          <div className="control mt-4">
            <input type="submit" value="Add New Task" className="button is-primary"/>
          </div>
        </div>
      </form>
    </section>

)
}
export default AddNewTask;
