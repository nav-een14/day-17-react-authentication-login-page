import {useState} from "react";


function Login(){


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");



const login=()=>{


if(!email || !password){

alert("Fill all fields");

return;

}


alert("Login Successful");


};



return(

<div>


<h1>
Login
</h1>



<input

placeholder="Email"

value={email}

onChange={(e)=>

setEmail(e.target.value)

}

/>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>

setPassword(e.target.value)

}

/>



<button onClick={login}>

Login

</button>



</div>

);


}


export default Login;