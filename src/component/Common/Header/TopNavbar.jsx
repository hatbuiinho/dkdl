import { Button, Menu, PageHeader } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';
export const TopNavbar = () => {
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5">
        <a href="index.html" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">CTNPQ</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse py-4 py-lg-0" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <a href="index.html" className="nav-item nav-link active">
              Trang chủ
            </a>
            <a href="/festival" className="nav-item nav-link">
              Thông tin đại lễ
            </a>
            <a href="contact.html" className="nav-item nav-link">
              Liên hệ
            </a>
          </div>
          <a href="" className="btn btn-primary">
            Đăng nhập<i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
      {/* Navbar ant start */}
      <div className="nav-container">
        <div>
          <p>Home</p>
        </div>
        <div>
          <Menu mode="horizontal">
            <Menu.Item key="mail">
              <a href="/">Trang chủ</a>
            </Menu.Item>
            <Menu.Item key="mail2">
              <a href="/festival">Thông tin đại lễ</a>
            </Menu.Item>
            <Menu.Item key="mail2">
              <a href="/">Liên hệ</a>
            </Menu.Item>
            <Menu.Item key="alipay">
              <a href="/">Contact Us</a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
      {/* Navbar ant end */}
    </>
  );
};
