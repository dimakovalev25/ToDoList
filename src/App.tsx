import React from 'react';
import './App.css';
import ToDoList from "./todolist/Todolist";

function App() {
  return (
    <div className="App">
      <ToDoList title={'What to learn'}/>
      <ToDoList title={'What to watch'}/>
      <ToDoList title={'What to repeat'}/>
    </div>
  );
}

export default App;
