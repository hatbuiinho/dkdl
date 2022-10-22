import React from 'react';
// import LoginPopup from '../Auth/LoginPopup';
import { Header } from '../../component/Common/Header';
import { Footer } from '../../component/Common/Footer';
export const HomeLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      {/* <LoginPopup /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};
