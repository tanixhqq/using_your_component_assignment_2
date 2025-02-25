import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ image, title, description }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        width: "300px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
