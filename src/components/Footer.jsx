import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>ABOUT FOOTWEAR</h4>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
        </p>
        <div className="social-icons">
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-dribbble"></i></a>
        </div>
      </div>

      <div className="footer-section">
        <h4>CUSTOMER CARE</h4>
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Returns/Exchange</a></li>
          <li><a href="#">Gift Voucher</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Special</a></li>
          <li><a href="#">Customer Services</a></li>
          <li><a href="#">Site Maps</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>INFORMATION</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Delivery Information</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Order Tracking</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>NEWS</h4>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Exhibitions</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>CONTACT INFORMATION</h4>
        <p>291 South 21th Street, Suite 721 New York NY 10016</p>
        <p>+ 1235 2355 98</p>
        <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
        <p><a href="#">yoursite.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;