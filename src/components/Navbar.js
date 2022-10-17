import { Link } from 'react-router-dom';
import {logout } from "../firebase";
import useUserHook from "../hooks/useUserHook";


const Navbar = () => {

  const {user , name} = useUserHook();


  return (
    <header>
      <div className="Navbar">
        <Link to="/">
          <h1>Chat App</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span style={{"paddingRight": 20}}>{name}</span>
              <span>{user.email}</span>
              <button onClick={logout}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar;