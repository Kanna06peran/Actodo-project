import { act } from "react"

function TodoItem(props){
    const activityarr = props.activityarr
    const setactivity = props.setactivity

    function handleDelete(deleteid){
        var temparr=activityarr.filter(
            function(item){
                if(item.id===deleteid){return false}
                else{return true}
            }
        )
    setactivity(temparr)
        

    }
    return(<div className="flex justify-between">
        <p>{props.index+1}.{props.activity}</p>
        <button className=" text-red-500" onClick={()=>{handleDelete(props.id)}}>Delete</button>
        </div>

    )

}

export default TodoItem