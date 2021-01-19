import React,{FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setTaskToDelete, setTasktoEdit } from '../store/action/list.action';
import { Task } from '../store/types';

interface TasksProps{
  tasks: Task[]
}

const Tasks:FC<TasksProps> = ({tasks})=>{
const dispatch = useDispatch();
const list = useSelector((state:RootState)=> state.list.seletedList!);

const setTaskToDeleteHandler = (task:Task)=>{
dispatch(setTaskToDelete(task,list))
};

const setTaskToEditHandler = (task: Task) => {
  dispatch(setTasktoEdit(task, list));
}
const taskTable = (
  <table id="tasks-table" className="table is-fullwidth is-striped">
    <thead>
      <tr>
        <th>Task</th>
        <th className="has-text-centered">Edit</th>
        <th className="has-text-centered">Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        tasks.map((task:Task)=> (
          <tr key={task.id} className={task.completed ? 'completed': ''}>
            <td>{task.name}</td>
            <td className="has-text-centeed">
              <button className="button is-primary is-samll" onClick={()=>setTaskToEditHandler(task)}>
                <span className="icon">
                  <i className="fas fa-edit"></i>
                </span>
              </button>
            </td>
            <td className="has-text-centered">
              <button className="button is-danger is-small" onClick={()=>setTaskToDeleteHandler(task)}>
                <span className="icon">
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

  return (
  <section className="section">
    <h2 className="is-size-4 has-text-centered">List of tasks in selected list</h2>
    {tasks.length === 0 ? <p id="no-tasks" className="py-4 has-text-centered">No Tasks</p> : taskTable}
  </section>
)
}
export default Tasks;