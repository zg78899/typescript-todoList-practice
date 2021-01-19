import { time } from 'console';
import React,{FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setNotification } from '../store/action/notification.action';

interface NotificationProps{
  msg:string;
};
let timeout:ReturnType<typeof setTimeout>

const Notification:FC<NotificationProps> = ({msg})=>{
  const dispatch= useDispatch();
  const type = useSelector((state:RootState) =>state.notification.type);
  console.log(type);
  console.log(msg);
  

  useEffect(()=>{
    if(msg !== ''){
      console.log('1')
      if(timeout){
        console.log('2')
        clearTimeout(timeout);
      }
      console.log('3')
      timeout = setTimeout(()=>{
        console.log('4')
        dispatch(setNotification(''));
      },3000);
    }

  },[dispatch,msg]);

  const closeNotification = ()=>{
    dispatch(setNotification(''));
    clearTimeout(timeout);
  }

  return (
    <div className={msg ? `${type === 'danger' ? 'notification is-danger': 'notification is-primary'}` : `notification is-hidden`}>
      <button  className="delete" onClick={closeNotification}></button>
      <p>{msg}</p>
    </div>
  )
}

export default Notification;
