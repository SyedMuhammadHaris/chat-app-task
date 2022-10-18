import { Link } from "react-router-dom";
import LogOut from "../pages/LogOut";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <header>
      <div className="Navbar">
        <Link to="/">
          <h1>Chat App</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span style={{ paddingRight: 20 }}>{user.email}</span>
              <LogOut />
            </div>
          )}
          {!user && (
            <div>
              <p>Not Login</p>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
