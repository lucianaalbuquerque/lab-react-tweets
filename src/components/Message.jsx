import React from 'react'

function Message(props) {
    console.log('message', props)
  return (
    <div><p className="message">{props.txt}</p></div>
  )
}

export default Message