import React from 'react'

function ProfileImage(props) {
  return (
    <div>
    <img
    src={props.url}
    className="profile"
    alt="profile"
  />
  </div>
  )
}

export default ProfileImage