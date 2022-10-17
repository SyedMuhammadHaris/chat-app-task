import React, { useState } from "react";
import { db, auth } from "../firebase";
// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import {collection,addDoc} from "firebase/firestore";


import "firebase/compat/firestore";

const SendMessage = () => {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, email } = auth.currentUser;
    try {
      await addDoc(collection(db, "messages"), {
        text: msg,
        email,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMsg("");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            placeholder="Message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
