import { db } from "../Firebase";
import { useState } from "react"

let ListCard = ({ list }) => {
  console.log(list)
  const [isChecked, setisChecked] = useState(false);

  return (
    <>
      {
        isChecked ? (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <input type="checkbox" checked={isChecked} onChange={() => setisChecked(!isChecked)} class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1"></label>
            <strong> Done !</strong> {list.todo}.
            <button type="button" onClick={event => db.collection('todos').doc(list.id).delete()} class="btn-close" data-bs="alert" aria-label="Close"></button>
          </div>
        ) : (
          <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <input type="checkbox" onChange={() => setisChecked(!isChecked)} class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1"></label>
            <strong></strong> {list.todo}.
            <button type="button" onClick={event => db.collection('todos').doc(list.id).delete()} class="btn-close" data-bs="alert" aria-label="Close"></button>
          </div>
        )
      }
    </>
  )
};
export default ListCard;
