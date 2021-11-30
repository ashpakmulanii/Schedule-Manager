import "./App.css";
import Header from "./TodoListComponents/Header";
import { Footer } from "./TodoListComponents/Footer";
import { useState } from "react";
import { List } from "./TodoListComponents/List";
import AddingTodosForm from "./TodoListComponents/AddingTodosForm";
import { LoginForm } from "./TodoListComponents/LoginForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const [check, setCheck] = useState(false);

  const Validated = (username, userpass)=>{
    console.table([username,userpass])
    if(username==="apk"&& userpass==="admin"){
      setCheck(true);
    }
    else if(!username || !userpass){
      alert("Username or Password cannot be empty !")
    }
    else{
      alert("Incorrent credits take username and password from admin !")
    }
  }

  const onDelete = (todo) => {
    console.log("I'm todo delete and i have :", todo);
    setTodos(
      listOfTodos.filter((e) => {
        return e !== todo;
      })
    );
  };

  let [listOfTodos, setTodos] = useState([
    {
      no: 1,
      title: "Wake up at 3pm",
      desc: "Waking up early at 3pm for study and walking",
    },
    {
      no: 2,
      title: "Go for walking at 5am",
      desc: "Walking time after 2 hours of study",
    },
    {
      no: 3,
      title: "Coding time",
      desc: "React codes for 2 hours",
    },
    {
      no: 4,
      title: "Aptitude practice",
      desc: "Aptitude skills practice test",
    },
  ]);

  let AddNewTodo = (title, desc) => {
    let no;
    if (listOfTodos.length == 0) {
      no = 0;
    } else {
      no = listOfTodos[listOfTodos.length - 1].no + 1;
    }
    let NewItem = {
      no: no,
      title: title,
      desc: desc,
    };
    setTodos([...listOfTodos, NewItem]);
  };


  
  return (
    <>
    <Router>
        {check===false? <LoginForm Validated={Validated}/>:
          <>
          <Header title="Schedule Manager" setCheck={setCheck} visibility={true} />
          <AddingTodosForm AddNewTodo={AddNewTodo} />
          <List todo={listOfTodos} onDelete={onDelete} />
          </>
        }
      </Router>
      </>
  );
}
export default App;
