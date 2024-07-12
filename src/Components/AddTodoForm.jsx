import { useState } from "react"
import TodoContainer from "./ToDoContainer"
function AddTodoForm(props){
    
    const activityarr = props.activityarr
    const setactivity = props.setactivity
    const [newact,setnewact]=useState("")
    function handleChange(event){
        setnewact(event.target.value)

    }

    function addActivity(){
        setactivity([...activityarr,{id:activityarr.length+1,activity:newact}])
        setnewact("")

    }

    return(<div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <div>
            <input value={newact} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?"></input>
            <button onClick={addActivity} className="bg-black text-white p-1 border border-black">Add</button>
        </div>
    </div>)

}



export default AddTodoForm