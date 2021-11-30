import React from "react";

export const PrintList = ({ list, onDelete }) => {
  return (
    <div className="container">
      <h4>{list.title}</h4>
      <p>{list.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(list);
        }}
      >
        Delete
      </button>
      <hr />
    </div>
  );
};
