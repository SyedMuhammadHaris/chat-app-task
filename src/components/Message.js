import { auth } from "../firebase";

const Message = ({ message }) => {
  return (
    <div
      key={message.id}
      className={`msg ${
        message.uid === auth.currentUser.uid ? "sent" : "received"
      }`}
    >
      <p className="message-content">{message.email} </p>
      <p className="message-content">{message.text}</p>
    </div>
  );
};

export default Message;
