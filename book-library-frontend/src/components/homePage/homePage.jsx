import React, { useEffect, useState } from "react";
import axios from "axios";
import "./homePage.css";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/loader";
import Header from "../header/header";

const HomePage = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/all")
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await axios.delete(`http://localhost:8081/delete/${id}`);
      setPost((prevPost) => prevPost.filter((post) => post._id !== id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/editPage/${id}`);
  };

  return (
    <>
    <Header/>
      {loading ? (
        <Loader />
      ) : (
        <div className="post_container">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {post.map((post) => (
                <tr key={post._id}>
                  <td>{post.title}</td>
                  <td>{post.author}</td>
                  <td>{post.genre}</td>
                  <td>{post.year}</td>
                  <td>
                    <button
                      className="edit_btn"
                      onClick={() => handleEdit(post._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete_btn"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default HomePage;
