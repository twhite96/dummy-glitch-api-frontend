import React from 'react';

const User = ({ userData = []}) => {
  return (
    <div>
      <center><h1>Contact List</h1></center>
      {userData.map((user) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{user.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{user.email}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{user.address.streetAddress}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{user.address}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{user.bio}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{user.image}</h6>
            <p class="card-text">{user.company.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>

  )
};

export default User;
