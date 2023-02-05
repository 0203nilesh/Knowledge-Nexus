import React from 'react'
import './styles.css';

export default function Footer() {
  return (
 <div>
               <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>MentorShip</h3>
                                <p>
                                Street no. 12,Near City Mall, 
                                New Delhi, 210056, India  <br/><br/>
                                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                                    <strong>Email:</strong> info@example.com<br/>
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"/> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"/> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"/><a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"/><a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"/> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"/> <a href="#">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"/> <a href="#">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"/> <a href="#">DSA</a></li>
                                    <li><i className="bx bx-chevron-right"/> <a href="#">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"/> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4" id="last">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>MentorShip</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <a href="#">NitMzian</a>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" className="facebook"><i className="fab fa-facebook-f fa-1x"
                            style={{color: '#3b5998'}}/></a>
                        <a href="#" className="youtube"><i  className="fab fa-youtube fa-1x" style={{color: "#ed302f"}}/></a>
                        <a href="#" className="youtube"><i  className="fab fa-google fa-1x" style={{color: "#ed302f"}}/></a>
                        <a href="#" className="youtube"><i  className="fab fa-linkedin fa-1x" style={{color:  "#0082ca"}}/></a>
                        <a href="#" className="youtube"><i  className="fab fa-github fa-1x" style={{color:  "#333333"}}/></a>
                        <a href="#" className="youtube"><i  className="fab fa-instagram fa-1x" style={{color: " #ac2bac"}}/></a>

                </div>
                </div>
             </footer>

    </div>
  )
}
