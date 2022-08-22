import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/">
        <InstagramIcon />
      </a>
      <a href="https://twitter.com/">
        <TwitterIcon />
      </a>
    </div>
  );
};
