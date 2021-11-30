import React from "react";
import ListCard from "./ListCard";

export const List = (props) => {
  return (
    <>
      <div className="container text-center">
        <h3>Todos List</h3>
      </div>
      {props.todo.length === 0 ? (
        <p className="text-center"> No Tasks or Todos to display !</p>
      ) : (
        props.todo.map((element) => {
          return (
            <div className="my-3">
              <ListCard
                list={element}
                key={element.sno}
                onDelete={props.onDelete}
              />
            </div>
          );
        })
      )}
      ;
    </>
  );
};
