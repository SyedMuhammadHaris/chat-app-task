import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase';
import { signOut } from 'firebase/auth';
const LogOut = () => {
  const navigate = useNavigate();
const logOut = () => {
    signOut(auth);
    navigate("/")
}

  return (
    <button onClick={logOut}>
        Logout
    </button>
  )
}

export default LogOut;