import { auth,provider } from './firebase/firebaseConfig'
import {signInWithPopup} from 'firebase/auth';

import './App.css'

function App() {
  
  const handleSign = () => {

    signInWithPopup(auth,provider).then((res) => console.log(res));
    
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleSign} >Google</button>
    </>
  )
}

export default App
