import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const navigate = useNavigate();

  const googleSignIn = (e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    navigate("/dashboard");
  };  
 
  return (
    <div className="login">
      <button onClick={googleSignIn}>Sign in with Google </button>
    </div>
  );
};

export default SignIn;
