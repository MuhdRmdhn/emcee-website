import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">Timothy Low</div>

        <div className="footer__links">
          <a href="https://instagram.com" target="_blank">
            <FaInstagram />
          </a>

          <a href="https://tiktok.com" target="_blank">
            <FaTiktok />
          </a>

          <a href="mailto:youremail@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer__copy">© 2026 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;