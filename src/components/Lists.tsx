import React,{FC, useEffect} from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getLists, setListIdToDelete, setListToEdit } from '../store/action/list.action';
import { List } from '../store/types';

const Lists  = ()=>{
  const dispatch = useDispatch();
  const lists = useSelector((state:RootState)=>state.list.lists);

  //리스트 가져오기
  useEffect(()=>{
    dispatch(getLists());
  },[dispatch])

  const setListIdToDeleteHander = (id:string)=>{
    dispatch(setListIdToDelete(id));
  }
  const setlistToEditHander = (id:string)=>{
    dispatch(setListToEdit(id));

  };
  return (
    <div className="panel is-primary">
      <p className="panel-heading">Yor lists</p>
      <div id="lists-wrapper">
        {Object.keys(lists).length === 0 ? 
        <p id="no-lists" className="py-4 has-text-centered">No Lists</p>
       :
        <div id="task-lists">
          {Object.values(lists).map((list:List) =>{
            return <div className="panel-block py-3" key={list.id}>
              <p onClick={()=> setlistToEditHander(list.id)}>{list.name}</p>
              <span className="panel-icon has-text-danger" onClick={() => setListIdToDeleteHander(list.id)}>
                <i className="fas fa-times-circle"></i>
              </span>
            </div>
          })}
        </div>
       
       }
      </div>
    </div>

  )
}

export default Lists;
