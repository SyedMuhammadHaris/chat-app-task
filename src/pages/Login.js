import { useState,useEffect } from "react";
import { auth, logInWithEmailAndPassword} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
     logInWithEmailAndPassword(email,password);

  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) 
      navigate("/dashboard");
  },[user,loading]);


  return (

      <form className="login" onSubmit={handleSubmit}>
      <h3> Login </h3>
        <input
         placeholder="Email" 
         type="email" 
         onChange={(e) => setEmail(e.target.value)}
         value={email}

          />
        <input 
        placeholder="Password" 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}/>
        <button type="submit">Sign In</button>
      </form>
  );
};

export default Login;

