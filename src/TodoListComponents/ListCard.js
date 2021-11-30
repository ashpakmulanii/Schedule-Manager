let ListCard = ({ list, onDelete }) => {
  let myStyle = {
    width: "18rem",
  };
  let btn = {
    marginLeft: "15px",
    borderRadius: "7px",
    boxShadow: "rgb(62, 57, 27) 2px 2px 5px",
  };
  return (
    <div className="card container" style={myStyle}>
      <div className="card-body">
        <h5 className="card-title">{list.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">{list.desc}</p>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Mark as done
          </label>
        </div>
        <a href="#" className="card-link">
          Reschedule
        </a>
        <button
          className="btn btn-sm btn-danger"
          style={btn}
          onClick={() => {
            onDelete(list);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default ListCard;
