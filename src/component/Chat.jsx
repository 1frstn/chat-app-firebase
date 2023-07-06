import React, { useState } from 'react'

export default function Chat({room}) {
  
  const [newMessage,setNewMessage] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    const message = {
      text,
    }
    setNewMessage('');
  }

  return (
    <div className='chat'>
      <div className='chat-info' >
        <p>Kerem</p>
        <p>{room}</p>
        <a href="/">Different Room</a>
      </div>
      <div className='messages' ></div>
      <form onSubmit={handleSubmit}>
        <input
        value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)} 
            type="text" 
            placeholder='Type your message' 
        />
        <button>Send</button>
      </form>
    </div>
  )
}
