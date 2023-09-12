import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background text-white py-4 border-primary border-t-[1px] ">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Zero Waste. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
