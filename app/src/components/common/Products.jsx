import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "./Card";
import "../../styles/card.css";

export const Products = () => {
  //TODO:based on the typpe, get products from api
  const { type } = useParams();
  const product = {
    img: "https://source.unsplash.com/random/800x600",
    category: "PRODUCTIVITY",
    datePublished: "3 days ago",
    title: "7 Skills of Highly Effective Programmers",
    description:
      "Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Therefore we have applied several golden rules.",
    author: "Glen Williams",
    authorImage: "https://i.pravatar.cc/200",
  };

  return (
    <div className="card-container">
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <Card key={item} product={product} />
      ))}
    </div>
  );
};
