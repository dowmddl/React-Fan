import React, { useState } from 'react';
import LoginPanel from './LoginPanel';
import SignUpPanel from './SignUpPanel';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const togglePanel = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <LoginPanel onToggle={togglePanel} /> : <SignUpPanel onToggle={togglePanel} />}
    </div>
  );
};

export default Login;