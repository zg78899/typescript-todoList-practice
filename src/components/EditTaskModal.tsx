import React,{FC, useState} from 'react';
import { useDispatch } from 'react-redux';
import { unsetTaskToDelete, unsetTaskToEdit, updateTask } from '../store/action/list.action';
import { setNotification } from '../store/action/notification.action';
import { List, Task } from '../store/types';


interface EditTaskModalProps{
  taskToEdit:{
    task: Task;
    list: List;
  }
};


const EditTaskModal:FC<EditTaskModalProps> = ({taskToEdit:{task,list}})=>{
const dispatch = useDispatch();
const [taskName,setTaskName] = useState(task.name);
const [ taskState,setTaskState] = useState(task.completed);


const nameChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
  setTaskName(e.currentTarget.value)

};

const stateChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
  setTaskState(e.currentTarget.checked);

}
const submitHandler  = (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();

  if(taskName === ''){
    return alert('Task naem is reqired');
  }
  if(taskName === task.name && taskState === task.completed){
    return alert(`Task name adn state are same as before!!`);
  }

  dispatch(updateTask(task.id,taskName,taskState,list));
  dispatch(setNotification(`Task ${task.name} updated`));

}
const closeModalHandler = ()=>{
  dispatch(unsetTaskToEdit());
}

return(
<div className="modal is-active">
  <div className="modal-background close-modal" onClick={closeModalHandler}></div>
  <form action="" className="modal-card" onSubmit={submitHandler}>
    <header className="modal-card-title">
      <p className="modal-card-title">Eidt Task</p>
      <button className="delete modal-close" aria-label="close" type="button" onClick={closeModalHandler}></button>
    </header>
    <div className="modal-card-body">
      <div className="filed">
      <label className="label">Task Name</label>
            <div className="control">
              <input type="text" className="input" name="taskname" placeholder="Task Name" value={taskName} onChange={nameChangeHandler} />
            </div>
      </div>
      <div className="field">
      <label className="label">Complete task</label>
      <label className="checkbox">
        <input type="checkbox"  name="taskstate" checked={taskState} onChange={stateChangeHandler} id=""/>{' '}Complete
      </label>
      </div>
    </div>
    <div className="modal-card-foot">
      <button type="submit" className="button is-success">Save Changes</button>
      <button type="button" className="button close-modal" onClick={closeModalHandler}>Cancel</button>
    </div>
  </form>
</div>

)
}
export default EditTaskModal;
