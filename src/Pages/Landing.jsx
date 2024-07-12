import Header from "../Components/Header";
import Card from "../Components/Card";
import TodoContainer from "../Components/ToDoContainer";
import AddTodoForm from "../Components/AddTodoForm";
import { useLocation } from "react-router-dom"
import { useState } from "react";


function Landing(){
    
    const data =useLocation()
    console.log(data.state.user)
    return(<div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <Header username={data.state.user}/>
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23°C"} subtitle={"Chennai"} />
            <Card bgcolor={"#FD6663"} title={"December 20"} subtitle={"10:53:08"} />
            <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
          </div>
          
          <div>
            <TodoContainer/>
          </div>
    
        </div>
      </div>  )
}

export default Landing