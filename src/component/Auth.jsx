import { auth,provider } from '../firebase/firebaseConfig';
import {signInWithPopup } from 'firebase/auth';

export default function Auth({setIsAuth}) {

    const handleClick = () => {

        signInWithPopup(auth,provider)
                .then((res) => {
                  localStorage.setItem("token" , res.user.refreshToken)
                  console.log(res.user.refreshToken);
                  setIsAuth(true);
                })
    }

  return (
    <div className='auth' >
        <h1>Chat Room</h1>
        <p>Please login for chatting.</p>

        <button
               onClick={handleClick}
               >Login with Google
        </button>
    </div>
  )
}
