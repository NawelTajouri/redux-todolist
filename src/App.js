import React from "react";
import ListTasks from './components/ListTasks';
import AddTask from './components/AddTask';
import Filter from './components/filter';
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="TODO"><h1>My Todos</h1></div>
        
        <AddTask />
        <Filter/> 
        <ListTasks />
      </div>
    </div>
  );
}

export default App;
