import React from 'react';

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    // Perform logout functionality here, such as clearing local storage, resetting state, etc.
    // For example, you might clear a token stored in local storage:
    localStorage.removeItem('authToken');
    // After performing logout actions, you can redirect the user to the login page or any other desired location.
    // For simplicity, let's just refresh the page after logout:
    window.location.reload();
  }

  render() {
    return (
      <button onClick={this.handleLogout}>Logout</button>
    );
  }
}

export default LogoutButton;
