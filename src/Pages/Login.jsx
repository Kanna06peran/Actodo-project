import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props){
    const users = props.users
    const navigate = useNavigate()
   
    const [eusername,setEusername]=useState()
    const [epassword,setEpassword]=useState()
    const [ruser,setRuser] = useState(true)
    
    function checkUser(){
        var userfound=false
        users.forEach(function(item)
    {
        if(item.username === eusername && item.password === epassword)
            {
                console.log("Login Sucessful")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
        
    })
    if(userfound===false)
    {
        console.log("Login Failed ")
        setRuser(false)
    }

    }

    function handleUInput(evt){
        setEusername(evt.target.value)

    }

    function handlePInput(evt){
        setEpassword(evt.target.value)

    }
    return(<div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi!</h1>
            {
                ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-500">Please sign up before you login</p>
            }
            
            <div className="flex flex-col gap-2 mt-5">
                <input type="text" onChange={handleUInput} className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username"></input>
                <input type="text" onChange={handlePInput} className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password"></input>
                
                <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>
                <p>Didn't have an account?<Link to={"/signup"} className="underline">SignUp</Link></p>
                
            </div>

        </div>
    

    

    </div>)
}

export default Login