import axios from "axios";
import React, { useState, useEffect } from "react";

const CompA = () => {
  // https://jsonplaceholder.typicode.com/posts
  const [id, setId] = useState(0);
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="">
      <input type="number" onChange={(e) => setId(e.target.value)} />

      <ul>
        <li>
          {post.id} - {post.title}
        </li>
      </ul>
    </div>
  );
};

export default CompA;
