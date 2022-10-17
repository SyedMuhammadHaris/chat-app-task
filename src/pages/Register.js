import { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth,registerWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Register = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
    console.log(email);
    console.log(password);
    console.log(name);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  },[user,loading]);

  
  return (
    <form className="signup" onSubmit={handleSubmit}>
        <h2> Register </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
          value={password}
        />
        <button type="submit">Sign up</button>
       
      </form>

  );
};

export default Register;
