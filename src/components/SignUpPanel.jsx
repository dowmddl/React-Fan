import React, { useState } from 'react';
import styled from 'styled-components';

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
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ToggleLink = styled.span`
  color: #28a745;
  text-decoration: underline;
  cursor: pointer;
`;

const SignUpPanel = ({ onToggle }) => {
  const [id, setid] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSignUp = () => {
  
    console.log('회원가입');
  };

  return (
    <PanelContainer>
      <Title>회원가입</Title>
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
      <Input
        type="text"
        placeholder="닉네임 (1-10글자)"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        maxLength={10}
        minLength={1}
      />
      <Button onClick={handleSignUp}>회원가입</Button>
      <p>
        이미 계정이 있나요? <ToggleLink onClick={onToggle}>로그인</ToggleLink>
      </p>
    </PanelContainer>
  );
};

export default SignUpPanel;