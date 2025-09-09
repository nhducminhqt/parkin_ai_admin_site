import React from "react";
import "../css/footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <span className="footer-text">
      &copy; {new Date().getFullYear()} Parkin AI. Đặt chỗ đỗ xe thông minh với
      AI hỗ trợ.
    </span>
  </footer>
);

export default Footer;
