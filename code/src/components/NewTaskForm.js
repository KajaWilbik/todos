/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';

export const NewTaskForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [newTaskItem, setNewTaskItem] = useState('')
  const dispatch = useDispatch()

  // adding new task using dispatch
  const newTask = () => {
    return (
      dispatch(
        tasks.actions.addTask({
          text: newTaskItem,
          complete: false,
          id: Date.now()

        // creating a unique number by using date:
        // made up of the four digit year, two digit month,
        // two digit day, two digit hour, two digit minute, two digit second,
        // and three digit millisecond +
        // a random number from Math.random() if we need a huge data base
        }),
        setNewTaskItem('') // invoke the function and cleans input after adding a task
      )
    )
  };
  return (
    <formStyle>
      <Input type="text" value={newTaskItem} placeholder="write here your task" onChange={(e) => setNewTaskItem(e.target.value)} />
      <Button type="button" className="button" onClick={newTask}>Add task</Button>
    </formStyle>
  )
}

export const formStyle = styled.div`
text-align: center;

/* grid-area: 1 / 2 / 2 / 3; */
`

const Button = styled.button`
background-color:#d4a373;
margin:5px;
margin-left:10px;
border-radius: 5px;
`

const Input = styled.input`
margin:5px;
margin-left: 30px;
padding: 5px;
border-radius: 5px;
text-align:center;
background-color: #fefae0;

`