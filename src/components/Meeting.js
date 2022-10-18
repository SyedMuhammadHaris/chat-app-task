
const Meeting = () => {
  return (
    <div className="meeting">
      <h2>Create Meeting</h2>
      <form >
        <input type="text" placeholder="Enter Date and time"/>
        <input type="email" placeholder="Your email"/>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Meeting;