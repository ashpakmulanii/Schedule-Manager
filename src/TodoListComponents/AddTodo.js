import { unstable_getNormalizedScrollLeft } from "@mui/utils";
import { useState } from "react";
import { db, storage } from "../Firebase";
import firebase from "firebase/compat";

function AddToDo() {
  let HeadingStyle = {
    color: "blue",
  };
  let [title, setTitle] = useState("");
  let [status, setStatus] = useState(false);



  let Submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title cannot be empty !");
    }
    else {
      db.collection('todos').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        title: title,
      })
      setTitle("");
      // AddNewTodo(title, desc, status);
    }
  };
  return (
    <form onSubmit={Submit}>
      <div className="container my-4">
        <span className="container text-center">
          <h2 style={HeadingStyle}> Schedule Manager</h2>
          <p>
            Add your schedules or To Do lists and schedule manager remind you in
            different ways.
          </p>
        </span>

        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
          />
          <div id="titleHelp" className="form-text">
            Title or Heading of your task
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </div>
    </form>
  );
}
export default AddToDo;
