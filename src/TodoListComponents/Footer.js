import React from "react";

export const Footer = () => {
  let footerStyle = {
    width: "100%",
    position: "relative",
  };
  return (
    <footer className="text-light bg-dark text-center py-3" style={footerStyle}>
      <p>Copyright &copy; all rights reserved by mytodoslist.com</p>
    </footer>
  );
};
