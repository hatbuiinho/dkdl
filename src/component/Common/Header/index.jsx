// import React from 'react';
// import ReactWOW from 'react-wow';
// import LoginPopup from "../Auth/LoginPopup";
import './style.scss';
import Navbar from './Navbar';
import { Topbar } from './Topbar';
import { TopNavbar } from './TopNavbar';
export const Header = () => {
  return (
    <>
      <Topbar />
      <TopNavbar />
      {/* <Navbar /> */}
    </>
  );
};
