import { useState } from "react";

const AddingTodosForm = ({ AddNewTodo }) => {
  let HeadingStyle = {
    color: "blue",
  };
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");
  let Submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Field cannot be empty !");
    } else AddNewTodo(title, desc);
  };
  return (
    <form>
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
            id="exampleInputEmail1"
            aria-describedby="titleHelp"
          />
          <div id="titleHelp" className="form-text">
            Title or Heading of your task
          </div>
        </div>
        <div className="mb-3">
          <label for="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" onClick={Submit} className="btn btn-success">
          Add Todo
        </button>
      </div>
    </form>
  );
};
export default AddingTodosForm;
