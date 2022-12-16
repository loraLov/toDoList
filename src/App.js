
import './App.css';
import { ToDoList } from './ToDoList';
import image from './toDO.jpg';

function App() {
  return (
    <div className="container" >
      <div className = "picture">
      <h1>To Do List</h1>
      <img src ={image} width="600px" alt ="action"/>
      </div>
      <div className="list">
    <ToDoList/>
    </div>
    </div>
  );
}

export default App;
