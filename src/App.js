import Header from "./Components/Header";
import Card from "./Components/Card";
import TodoContainer from "./Components/ToDoContainer";
import AddTodoForm from "./Components/AddTodoForm";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState } from "react";
import './index.css';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";

function App(){
  const [users,setusers]=useState([{username:"John",password:"123"}])

  return(<div>
     <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
      <Route path='/Signup' element={<Signup users={users} setusers={setusers}/>}></Route>
      <Route path='/landing' element={<Landing users={users} setusers={setusers}/>}></Route>
     
    </Routes>
  </BrowserRouter>
  </div>)
}




export default App;
