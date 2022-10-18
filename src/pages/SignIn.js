import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const googleSignIn = () => {
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
