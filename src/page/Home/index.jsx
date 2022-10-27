/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';

import { Helmet } from 'react-helmet';
import CeremonyServingRegister from '../../component/CeremonyServingRegister';
import './style.scss';
import { Carousel } from 'antd';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Chúng thanh niên phật quang</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Quicksand:wght@600;700&display=swap"
            rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="zoofari/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="zoofari/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="zoofari/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="zoofari/css/bootstrap.min.css" rel="stylesheet" />
        <link href="zoofari/css/style.css" rel="stylesheet" />
          {/* <!-- Google Web Fonts --> */}

          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="zoofari/lib/wow/wow.min.js"></script>
<script src="zoofari/lib/easing/easing.min.js"></script>
<script src="zoofari/lib/waypoints/waypoints.min.js"></script>
<script src="zoofari/lib/counterup/counterup.min.js"></script>
<script src="zoofari/lib/owlcarousel/owl.carousel.min.js"></script>
<script src="zoofari/lib/lightbox/js/lightbox.min.js"></script>
<script src="zoofari/js/main.js"></script>

        </Helmet>
        {/* <Content> */}
        {/* <!-- Spinner Start --> */}
        {/* <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        className="spinner-border text-primary"
        style={{width: '3rem', height: '3rem'}}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Video Modal Start --> */}
        <div
          className="modal modal-video fade"
          id="videoModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                  Youtube Video
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* <!-- 16:9 aspect ratio --> */}
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    // allowfullscreen
                    allowscriptaccess="always"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Video Modal End --> */}

        {/* <!-- About Start --> */}
        <CeremonyServingRegister submitTarget="/register-result" />
        {/* <!-- About End --> */}

        <div className="container-xxl p-0 mb-5">
          <div className="row g-0 mx-auto">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 p-0 wow fadeIn" data-wow-delay="0.1s">
              <div className="header-bg h-100 d-flex flex-column p-5">
                <h1 className="display-4 text-light mb-5">
                  Đại lễ phật thành đạo 2022 - PL. 2565
                </h1>
                <div className="d-flex align-items-center pt-4 animated slideInDown">
                  <button
                    type="button"
                    className="btn btn-primary py-sm-3 px-3 px-sm-5 me-5"
                    data-bs-toggle="modal"
                    data-src="https://www.youtube.com/embed/l9R_L65ssE0"
                    data-bs-target="#videoModal"
                  >
                    <span>Xem video</span>
                  </button>
                  <h6 className="text-white m-0 ms-4 d-none d-sm-block">Xem video</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Carousel autoplay draggable>
                <div className="item">
                  <img className="img-fluid" src="/img/carousel-1.jpg" alt="" />
                </div>
                <div className="item">
                  <img className="img-fluid" src="/img/carousel-2.jpg" alt="" />
                </div>
                <div className="item">
                  <img className="img-fluid" src="/img/carousel-3.jpg" alt="" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        {/* <!-- Facts Start --> */}
        <div className="container-xxl bg-primary facts my-5 py-5">
          <div className="container py-5">
            <div className="row g-4">
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.1s"
              >
                <i className="fa fa-paw fa-3x text-primary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  50.000
                </h1>
                <p className="text-white mb-0">Tham gia</p>
              </div>
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.3s"
              >
                <i className="fa fa-users fa-3x text-primary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  12345
                </h1>
                <p className="text-white mb-0">Daily Vigitors</p>
              </div>
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.5s"
              >
                <i className="fa fa-certificate fa-3x text-primary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  12345
                </h1>
                <p className="text-white mb-0">Total Membership</p>
              </div>
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.7s"
              >
                <i className="fa fa-shield-alt fa-3x text-primary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  12345
                </h1>
                <p className="text-white mb-0">Save Wild Life</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Facts End --> */}

        {/* <!-- img Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="row g-5 mb-5 align-items-end wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="col-lg-6">
                <h1 className="display-5 mb-0">
                  Hình ảnh <span className="text-primary">Đại lễ</span>
                </h1>
              </div>
              {/* <div className="col-lg-6 text-lg-end">
            <a className="btn btn-primary py-3 px-5" href=""
              >Explore More imgs</a
            >
          </div> */}
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-4">
                  <div className="col-12">
                    <a className="img-item" href="img/img-md-1.jpg" data-lightbox="img">
                      <div className="position-relative">
                        <img className="img-fluid" src="/img/img-md-1.jpg" alt="" />
                        <div className="img-text p-4">
                          <p className="text-white small text-uppercase mb-0">img</p>
                          <h5 className="text-white mb-0">Person</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-12">
                    <a className="img-item" href="img/img-lg-1.jpg" data-lightbox="img">
                      <div className="position-relative">
                        <img className="img-fluid" src="/img/img-lg-1.jpg" alt="" />
                        <div className="img-text p-4">
                          <p className="text-white small text-uppercase mb-0">img</p>
                          <h5 className="text-white mb-0">Person</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="row g-4">
                  <div className="col-12">
                    <a className="img-item" href="img/img-lg-2.jpg" data-lightbox="img">
                      <div className="position-relative">
                        <img className="img-fluid" src="/img/img-lg-2.jpg" alt="" />
                        <div className="img-text p-4">
                          <p className="text-white small text-uppercase mb-0">img</p>
                          <h5 className="text-white mb-0">Person</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-12">
                    <a className="img-item" href="img/img-md-2.jpg" data-lightbox="img">
                      <div className="position-relative">
                        <img className="img-fluid" src="/img/img-md-2.jpg" alt="" />
                        <div className="img-text p-4">
                          <p className="text-white small text-uppercase mb-0">img</p>
                          <h5 className="text-white mb-0">Person</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="row g-4">
                  <div className="col-12">
                    <a className="img-item" href="/img/img-md-3.jpg" data-lightbox="img">
                      <div className="position-relative">
                        <img className="img-fluid" src="/img/img-md-3.jpg" alt="" />
                        <div className="img-text p-4">
                          <p className="text-white small text-uppercase mb-0">img</p>
                          <h5 className="text-white mb-0">Person</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-12">
                    <a className="img-item" href="/img/img-lg-3.jpg" data-lightbox="img">
                      <div className="position-relative">
                        <img className="img-fluid" src="/img/img-lg-3.jpg" alt="" />
                        <div className="img-text p-4">
                          <p className="text-white small text-uppercase mb-0">img</p>
                          <h5 className="text-white mb-0">Person</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- img End --> */}

        {/* <!-- Visiting Hours Start --> */}
        <div
          className="container-xxl bg-primary visiting-hours my-5 py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                <h1 className="display-6 text-white mb-5">
                  CHƯƠNG TRÌNH ĐẠI LỄ PHẬT THÀNH ĐẠO PL. 2565 - DL. 2022
                </h1>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span>Lễ tổng kết đạo tràng</span>
                    <span>9:00AM - 6:00PM</span>
                  </li>
                  <li className="list-group-item">
                    <span>Dùng cơm</span>
                    <span>9:00AM - 6:00PM</span>
                  </li>
                  <li className="list-group-item">
                    <span>Các đạo tràng báo cáo</span>
                    <span>9:00AM - 6:00PM</span>
                  </li>
                  <li className="list-group-item">
                    <span>Phát bằng khen</span>
                    <span>9:00AM - 6:00PM</span>
                  </li>
                  <li className="list-group-item">
                    <span>Dùng cơm chiều</span>
                    <span>9:00AM - 6:00PM</span>
                  </li>
                  <li className="list-group-item">
                    <span>Thức chúng</span>
                    <span>9:00AM - 6:00PM</span>
                  </li>
                  <li className="list-group-item">
                    <span>Tọa thiền</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 text-light wow fadeIn" data-wow-delay="0.5s">
                <h1 className="display-6 text-white mb-5">Thông tin liên hệ</h1>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Địa điểm</td>
                      <td>Núi Dinh, Bà Rịa Vũng Tầu</td>
                    </tr>
                    <tr>
                      <td>Zoo</td>
                      <td>123 Street, New York, USA</td>
                    </tr>
                    <tr>
                      <td>Ticket</td>
                      <td>
                        <p className="mb-2">+012 345 6789</p>
                        <p className="mb-0">ticket@example.com</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Support</td>
                      <td>
                        <p className="mb-2">+012 345 6789</p>
                        <p className="mb-0">support@example.com</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>
        {/* </Content> */}
      </div>
    );
  }
}

export default Home;
