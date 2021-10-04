import React from 'react';
import "./App.css";
import { IconButton, ListItem, makeStyles, ListItemAvatar, Avatar, ListItemText,TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Todo = (props) => {
  const classes = useStyles();

  const Date = <TextField
  id="date"
  label="Deadline"
  type="date"
  defaultValue="set date"
  className={classes.textField}
  InputLabelProps={{
    shrink: true,
  }}
/>

  return (
    <>

      <ListItem key={props.id} style={{width: "55ch"}}>
      <IconButton aria-label="delete" className={classes.margin} onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}  >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <ListItemAvatar>
          <Avatar>{props.id + 1}</Avatar>
        </ListItemAvatar>
        <ListItemText className="taskArea" primary={props.todo.todo} secondary={Date} />
       
      </ListItem>
    
    </>
  )
}
export default Todo;
