const Notification = ({ message }) => {
    if (message.state === null) {
        return null
    }
    return (
      <div className="message">
        {message.state}
      </div>
    )
  }

export default Notification