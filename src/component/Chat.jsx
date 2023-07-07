import React, { useEffect, useState } from 'react'
import {auth ,db} from '../firebase/firebaseConfig'
import { collection, addDoc, 
         serverTimestamp, onSnapshot,
         query, where,
         orderBy

        } from 'firebase/firestore';

export default function Chat({room}) {
  
  const [text,setText] = useState("");
  
  const messagesDb = collection(db,"messages")
  console.log("MESAGESDB?>>>>",messagesDb);
  const handleSubmit = () => {
    e.preventDefault();
    
    addDoc(messagesDb,{
      text,
      user: auth.currentUser.displayName,
      room,
      createdAt: serverTimestamp(),
    });

    setText('');
  }

  useEffect(() => {

    const queryMessage = query(messagesDb,
      where("room","==",room),
      orderBy('createdAt')
      )

    onSnapshot(queryMessage, (snapshot) => {
      const commingMessages = snapshot.forEach((doc) => {doc.data()})
    })
  },[])

  return (
    <div className='chat'>
      <div className='chat-info' >
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <a href="/">Different Room</a>
      </div>
      <div className='messages' ></div>
      <form onSubmit={handleSubmit}>
        <input
        value={text}
            onChange={(e) => setText(e.target.value)} 
            type="text" 
            placeholder='Type your message' 
        />
        <button>Send</button>
      </form>
    </div>
  )
}
