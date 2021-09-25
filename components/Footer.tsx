import React from "react";

const Footer = () => {
  return (
    <footer className="text-center p-10 mt-10 bg-gray-100 text-gray-500 border-t">
      Green Web Dev &copy;{new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
