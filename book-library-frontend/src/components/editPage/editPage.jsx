import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./editPage.css";
import Loader from "../loader/loader";

const EditPage = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/note/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setGenre(response.data.genre);
        setYear(response.data.year);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedNote = { title, author, genre, year };
    await axios
      .put(`http://localhost:8081/edit/${id}`, updatedNote)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancelEdit = () => {
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="edit_container">
          <h2>Edit Note</h2>
          <form onSubmit={handleSubmit} className="edit_form">
            <div className="edit_page_inputs">
              <div>
                <label htmlFor="title" className="edit_label">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="edit_input"
                />
              </div>
              <div>
                <label htmlFor="author" className="edit_label">
                  Author
                </label>
                <textarea
                  className="edit_textarea"
                  id="author"
                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="genre" className="edit_label">
                  Genre
                </label>
                <textarea
                  className="edit_textarea"
                  id="genre"
                  value={genre}
                  onChange={(event) => setGenre(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="year" className="edit_label year_input">
                  Year
                </label>
                <input
                  type="number"
                  id="year"
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                  className="edit_input"
                />
              </div>
            </div>

            <div className="btn_div">
              <button className="save_btn" type="submit">
                Save
              </button>
              <button className="cancel_btn" onClick={cancelEdit}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditPage;
