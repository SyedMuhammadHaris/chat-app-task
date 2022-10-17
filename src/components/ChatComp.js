import { useEffect, useState } from "react";
import {db} from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';


const ChatComp = () => {
  const [messages , setMessages] = useState([]);

  
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
    <div className="msgs">
      <h2>Chat</h2>
    {messages && messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
</div>
<SendMessage />
</>
  )
}

export default ChatComp;