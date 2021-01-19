import React,{FC} from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, unsetTaskToDelete } from '../store/action/list.action';
import { setNotification } from '../store/action/notification.action';
import { List, Task } from '../store/types';

interface DeleteTaskModalProps{
  taskToDelete: {
    task: Task;
    list: List;
  }
}

const DeleteTaskModal:FC<DeleteTaskModalProps> = ({taskToDelete:{task,list}})=>{
const dispatch = useDispatch();

const deleteHandler = ()=>{
  dispatch(deleteTask(task,list));
  dispatch(setNotification(`Task "${task.name}" deleleted`,'danger'));
}

const closeModalHandler = ()=>{
  dispatch(unsetTaskToDelete());
};


  return (
    <div className="modal is-active">
      <div className="modal-background close-modal" onClick={closeModalHandler}></div>
      <div className="modal-card">
        <header className="modal-card-head has-text-centered">
        <p className="modal-card-title">Are you sure you want to delete this task ?</p>
        </header>
        <footer className="modal-card-foot">
          <button className="button is-danger" type="button" onClick={deleteHandler}>Delete</button>
          <button type="button" className="button close-modal" onClick={closeModalHandler}>Cancel</button>
        </footer>
      </div> 
    </div>

)
}
export default DeleteTaskModal;
