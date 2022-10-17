// import React, { useEffect, useState } from "react";
import Meeting from '../components/Meeting';
import ChatComp from '../components/ChatComp';





const Dashboard = () => {
  // const {user , name} = useUserHook();

 
  return (
    <div className="dashboard">
      <Meeting />
      <ChatComp />
    </div>

  )
}

export default Dashboard;












 // const [user, loading, error] = useAuthState(auth);
  // const [name, setName] = useState("");
  // const navigate = useNavigate();

  // const fetchUserName = async () => {
  //   try {
  //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();

  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };

  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return navigate("/");

  //   fetchUserName();
  // }, [user,loading]);
