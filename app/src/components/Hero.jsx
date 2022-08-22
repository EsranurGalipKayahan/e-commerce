import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="col1">
        <div>
          <h2>
            MacBook
            <br />
            Pro 13"
          </h2>
          <br />
          <h3>10 cores GPU en 8 cores CPU</h3>
          <p>(Light/ 1,4 kilogram )</p>
          <br />
          <p>
            The Apple MacBook Pro 13 inches (2022) M2 (8-core CPU/10-core GPU)
            8GB/256GB Space Gray is faster and more energy-efficient thanks to
            the new M2 chip. The 10 GPU cores and 8 CPU cores work even faster
            and more efficiently than with the M1 chip. This way, you can edit
            videos even faster.
          </p>
        </div>

        <Link to="/MacBook">
          <button type="button" className="buy-btn">
            Discover
            <KeyboardDoubleArrowRightIcon className="arrow-icon" />
          </button>
        </Link>
      </div>
      <div className="col2">
        <div className="color-box"></div>
        <img src="images/hero.png" />
      </div>
    </div>
  );
};
