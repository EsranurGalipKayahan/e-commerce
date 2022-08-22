import React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import FilledFavoriteIcon from "@mui/icons-material/Favorite";
import "../../styles/card.css";

export const Card = ({ product }) => {
  const [displayFilledFav, setDisplayFilledFav] = React.useState(false);
  const [fixedFav, setFixedFav] = React.useState(false);

  const handleMouseOver = () => {
    if (fixedFav) setDisplayFilledFav(false);
    else setDisplayFilledFav(true);
  };
  const handleMouseLeave = () => {
    if (fixedFav) setDisplayFilledFav(true);
    else setDisplayFilledFav(false);
  };

  const handleClick = () => {
    setFixedFav((prev) => !prev);
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.img} />
        <div
          className="icon-wrapper"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {!displayFilledFav && <FavoriteIcon className="icon1" />}
          {displayFilledFav && <FilledFavoriteIcon className="icon2" />}
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <p>{product.title}</p>
        </div>
        <div className="card-description">{product.description}</div>
        <div className="card-footer">
          <div className="card-avatar">
            <img src={product.authorImage} />
            <p>{product.author}</p>
          </div>
          <button type="button">
            <ReadMoreIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
