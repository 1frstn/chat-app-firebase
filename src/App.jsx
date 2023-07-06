import { useRef, useState } from 'react'
import Auth from './component/Auth'
import Chat from './component/Chat';

function App() {
  
  const [isAuth,setIsAuth] = useState(localStorage.getItem('token'));
  const [room,setRoom] = useState(null)
 
  const inputRef = useRef();

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuth(false)
  }

  if(!isAuth){
    return (
      <div className='app'>
        <Auth setIsAuth={setIsAuth} />
      </div>
    )
  }

  return (
    <div className='container'>
      {room ? (<Chat room={room} />) : (
        <div className='room-container' >
        <h1>Chat Room</h1>
        <p>Choose your chat room.</p>
        <input type="text" ref={inputRef} />
        <button id='enter'
                onClick={()=>setRoom(inputRef.current.value)}
                >Room In
        </button>
        <button id='leave'
                onClick={handleLogout}
                >Sign Out
        </button>
      </div>
      )}
    </div>
  )
}

export default App
