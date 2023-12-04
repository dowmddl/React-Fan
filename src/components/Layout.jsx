
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/profile">내 프로필</Link>
          </li>
          <li>
            <Link to="/login">로그아웃</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;