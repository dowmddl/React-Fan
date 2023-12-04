import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'redux/modules/authSlice';

const PanelContainer = styled.div`
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ToggleLink = styled.span`
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
`;

const LoginPanel = () => {
  const [id, setid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://moneyfulpublicpolicy.co.kr/login', {
        id: id,
        password: password,
      });

      console.log('로그인 성공:', response.data);

     
      localStorage.setItem('accessToken', response.data.accessToken);

      dispatch(login(response.data)); 
      navigate('/');
      setid("");
      setPassword("");
    } catch (error) {
      console.error('로그인 실패:', error.message);
    }
  };

  const handleSignUp = () => {
    navigate('/SignUpPanel');
  };

  return (
    <PanelContainer>
      <Title>로그인</Title>
      <Input
        type="text"
        placeholder="아이디 (4-10글자)"
        value={id}
        onChange={(e) => setid(e.target.value)}
        maxLength={10}
        minLength={4}
      />
      <Input
        type="password"
        placeholder="비밀번호 (4-15글자)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        maxLength={15}
        minLength={4}
      />
      <Button onClick={handleLogin}>로그인</Button>
      <p>
        아직 계정이 없나요? <ToggleLink onClick={handleSignUp}>회원가입</ToggleLink>
      </p>
    </PanelContainer>
  );
};

export default LoginPanel;