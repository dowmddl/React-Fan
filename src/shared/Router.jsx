import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import LoginPanel from 'components/LoginPanel';
import Layout from 'components/Layout';
import { useSelector } from 'react-redux';
import SignUpPanel from 'components/SignUpPanel';

const Router = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route
            path="/"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/detail/:id" element={<Detail />} />
                </Routes>
              </Layout>
            }
          />
        ) : (
          <>
            <Route path="/login" element={<LoginPanel />} />
            <Route path="/signup" element={<SignUpPanel />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;