import React from "react";

const Footer: React.FC = () => (
  <footer
    style={{
      background: "#f5f5f5",
      padding: "16px 0",
      textAlign: "center",
      marginTop: 40,
    }}
  >
    <span style={{ color: "#888" }}>
      &copy; {new Date().getFullYear()} Parkin AI. Đặt chỗ đỗ xe thông minh với
      AI hỗ trợ.
    </span>
  </footer>
);

export default Footer;
