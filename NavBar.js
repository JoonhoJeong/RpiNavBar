import React from 'react';
import { useHistory } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const history = useHistory();

  const handleBack = () => {
    history?.goBack();
  };

  const handleHome = () => {
    let pageUrl = 'http://localhost:8765';
    document.location.href = pageUrl;
  };

  return (
    <div>
      <nav className="navbar">
        <div onClick={handleBack}>
          <span class="material-icons-outlined">arrow_back_ios</span>
        </div>
        <div onClick={handleHome}>
          <span class="material-icons-outlined">home</span>
        </div>
        <div>
          <span class="material-icons-outlined">notifications</span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
