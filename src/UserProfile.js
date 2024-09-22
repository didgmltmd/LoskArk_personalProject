import React from 'react'

const UserProfile = ({name,job}) => {
  return (
    <div>
        <h2>User Profile</h2>
        <p>Name:{name}</p>
        <p>Job:{job}</p>
    </div>
  )
}

export default UserProfile;