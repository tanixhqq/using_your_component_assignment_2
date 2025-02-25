import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      style={{
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#007BFF",
        color: "white",
        cursor: "pointer",
      }}
    >
      👍 Like {likes}
    </button>
  );
};

export default LikeButton;