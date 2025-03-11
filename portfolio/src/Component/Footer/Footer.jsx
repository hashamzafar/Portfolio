import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gary py-4 text-center  footer">
      <p className="text-sm">
        Copyright &copy; {new Date().getFullYear()} Hasham Zafar. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
