import {auth} from '../firebase'

const Message = ({message}) => {
  return (
        
      <div key={message.id}  className={`msg ${message.uid === auth.currentUser. uid ? 'sent' : 'received'}`}>
                <h5>{message.email }</h5>
                <p>{message.text}</p>
            </div>
  )
}

export default Message