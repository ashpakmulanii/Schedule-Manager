import "./App.css";
import Header from "./TodoListComponents/Header";
import { useState } from "react";
import AddingTodosForm from "./TodoListComponents/AddingTodosForm";
import { useEffect } from "react";
import ListCard from "./TodoListComponents/ListCard";
import { auth, db } from "./Firebase";
import "./TodoListComponents/LoginForm.css";
import Modal from '@material-ui/core/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddToDo from "./TodoListComponents/AddTodo";
import firebase from "firebase/compat";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [listOfTodos, setTodos] = useState([]);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [count, setCounter] = useState(0);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User has logged in
        console.log(authUser);
        setUser(authUser);
      }
      else {
        //User has loggged out.
        setUser(null);
      }
    })
    return () => {
      // Perform some cleanup action 
      unsubscribe();
    }
  }, [user, username])


  const SignUp = (event) => {
    event.preventDefault();
    console.table([email, password])
    auth.
      createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch((error) => alert(error.message))
    setOpenSignUp(false);
  }

  const SignIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.messege));
  }

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        todo: doc.data().title,
      })));
    })
  }, [])

  return (
    <>
      <Header title="Schedule Manager" user={user?.email} visibility={true} />
      <Modal
        open={openSignUp}
        onClose={() => setOpenSignUp(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="signup__box" sx={style}>
          <center>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <img src="https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-sign-up-call-to-action-bearicons-flat-bearicons-1.png" />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input type="text" value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <input type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input type="text" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" /><br />
              <button className="signup__btn" onClick={(event) => SignUp(event)}
              >Sign Up</button>
            </Typography>
          </center>
        </Box>
      </Modal>
      {
        user ? (
          <>
            <AddToDo />
            <div className="container text-center">
              <h3>Todos List</h3>
            </div>
            {
              listOfTodos.length === 0 ? (
                <p className="text-center"> No Tasks or Todos to display !</p>
              ) : (
                listOfTodos.map((list) => {
                  return (

                    <div className="list__card">
                      <ListCard
                        list={list}

                      />
                    </div>
                  )
                }
                )
              )
            }
          </>
        )
          :
          (
            <div className="text-center Body">
              <main className="form-signin">
                <h1 className="h3 mb-3 fw-normal">Log In</h1>
                <form>
                  <div className="login__title">
                    <img className='mb-3' src="https://img.icons8.com/fluency/48/000000/login-rounded-right.png" />
                  </div>
                  <div className="form-floating">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div className="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  <button className="w-100 btn btn-lg btn-primary" onClick={SignIn}>Sign In</button>
                  <p className="mt-5 mb-3 text-muted">&copy; 2021–2025</p>
                  <p>Dont have account ? <a href="#" onClick={() => setOpenSignUp(true)}> Sign Up</a></p>
                </form>
              </main>
            </div>
          )
      }
    </>
  );
}
export default App;
