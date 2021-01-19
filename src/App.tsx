import React,{FC}from 'react';
import { useSelector } from 'react-redux';
import DeleteListModal from './components/DeleteListModal';
import EditListModal from './components/EditListModal';
import Notification from './components/Notification';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { RootState } from './store';
import MainContent from './components/MainContent';
import EditTaskModal from './components/EditTaskModal';
import DeleteTaskModal from './components/DeleteTaskModal';

const App:FC = ()=> {
  const notificationMsg  = useSelector((state:RootState)=>state.notification.message);
  const listIdToDelete = useSelector((state:RootState)=>state.list.listIdToDelete);
  const listToEdit = useSelector((state:RootState)=>state.list.listToEidt);
  const taskToDelete = useSelector((state:RootState)=>state.list.taskToDelete);
  const taskToEdit = useSelector((state:RootState)=>state.list.taskToEdit);




  return (
    <div className="App">
      <Header title="Task List App" subtitle="Create soem lists and some tasks to each lists"/>
      <div className="container px-5">
        <div className="columns">
          <Sidebar/>
          <MainContent/>
        </div>
      </div>

      <Notification msg={notificationMsg}/>
      {listIdToDelete && <DeleteListModal listId={listIdToDelete}/>}
      {listToEdit && <EditListModal list={listToEdit}/>}
      {taskToEdit && <EditTaskModal taskToEdit={taskToEdit}/>}
      {taskToDelete && <DeleteTaskModal taskToDelete={taskToDelete}/>}
      
    </div>
  );
}

export default App;
