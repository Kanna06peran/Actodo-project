import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

function TodoContainer(props) {
    const [activityarr,setactivity] = useState([{id:1,activity:"go for a walk"}])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityarr={activityarr} setactivity={setactivity}/>
                <TodoList activityarr={activityarr} setactivity={setactivity}/>
                
                
            </div>
        </div>
    )
}


export default TodoContainer