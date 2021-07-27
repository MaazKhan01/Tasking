import React, { useState,useEffect } from 'react';
import "./App.css";
import Todo from './Todo';
import { makeStyles,Container,TextField,Button} from '@material-ui/core';
import Nav from './Nav';
import db from './firebase';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const App = () => {
    // all todos items 
    const [todos, setTodos] = useState([]);
    // item which is just typed in input field
    const [input, setInput] = useState('')
// database faching 
        useEffect( ()=>{
           db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
           setTodos(snapshot.docs.map(doc => ({id:doc.id, todo: doc.data().todo}) ))
         })
        },[])
    const newTodo = () => {
        if (!input) {
            return
        } else {
            db.collection('todos').add({
                todo:input ,
                timestamp : firebase.firestore.FieldValue.serverTimestamp()
            })
      
            setInput('');
        }
    }
 
    const classes = useStyles();
    return (
    <>
        <Nav/>
        <Container maxWidth="sm">

            <form className={classes.root} autoComplete="off" onSubmit={e => e.preventDefault()} style={{marginTop: "90px"}}>
                <TextField className="task" id="standard-basic"  label="Type Todo..." type="text" value={input} onChange={e => setInput(e.target.value)}  />
                <Button variant="contained" color="primary" type='submit' onClick={newTodo}>Add Task</Button>
                {/* render list items with delete button with another compunent */}
                {todos.map((todo, id) => <Todo text={todo}  id={id} todo={todo} />)}

            </form>
        </Container>
    </>
    )
}
export default App;