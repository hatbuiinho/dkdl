import React from 'react';
// import LoginPopup from "../Auth/LoginPopup";
import { Header } from '../../component/Common/Header';
export const HeaderLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      {/* <LoginPopup /> */}
      {children}
    </div>
  );
};
