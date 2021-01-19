import React,{FC, useState}from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../store/action/list.action';
import { setNotification } from '../store/action/notification.action';
import {List} from '../store/types';

const CreateNewList:FC =()=>{
  const dispatch = useDispatch();
  const [listName,setListName] = useState('');

  const onChangeHandler =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setListName(e.currentTarget.value)
  }
  const onSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    
    if(listName === '')return alert('List name is required!');

    const newList: List = {
      id:`list- ${new Date().getTime()}`,
      name:listName,
      tasks:[]
    };
    dispatch(addList(newList));
    dispatch(setNotification(newList.name));
    setListName('');
    

  }
  return (
    <div className="card mb-5">
      <div className="card-header">
        <p className="card-header-title">Create New List</p>
      </div>
      <div className="card-content">
        <form action="" onSubmit={onSubmit}>
          <div className="field">
          <label className="label">List Name</label>
            <div className="control">
              <input 
                className="input" 
                type="text" 
                placeholder="List Name" 
                name="listname" 
                value={listName} 
                onChange={onChangeHandler} 
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNewList;