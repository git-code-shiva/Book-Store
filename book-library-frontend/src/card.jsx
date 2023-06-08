import React from "react";
import { useNavigate } from "react-router-dom";
import "../src/card.css";

const Card = ({ post, handleDelete, handleEdit }) => {
  return (
    <>
      <div className="card_container">
        <h3 className="card_title">{post.title}</h3>
        <div className="card_desc">{post.author}</div>
        <div className="card_desc">{post.genre}</div>
        <div className="card_desc">{post.year}</div>

        <div className="icon">
          <img
            src="https://w7.pngwing.com/pngs/1018/119/png-transparent-computer-icons-editing-pencil-miscellaneous-angle-pencil.png"
            height="25px"
            alt="icon"
            onClick={handleEdit}
          />
          <img
            src="https://icons.veryicon.com/png/o/business/simple-linear-icon-icon/delete-332.png"
            height="30px"
            alt="icon"
            onClick={handleDelete}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
