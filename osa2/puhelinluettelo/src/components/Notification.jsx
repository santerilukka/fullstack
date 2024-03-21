const Notification = ({ message }) => {
    const messageStyle = {
    color: message.color
    }
    if (message.state === null) {
        return null
    }
    return (
      <div className="message" style={messageStyle}>
        {message.state}
      </div>
    )
  }

export default Notification