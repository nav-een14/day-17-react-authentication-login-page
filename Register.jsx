import {useState} from "react";


function Register(){


const [user,setUser]=useState({

email:"",

password:""

});


const handleChange=(e)=>{


setUser({

...user,

[e.target.name]:e.target.value

});


};



const submitForm=()=>{


console.log(user);


alert("Registered Successfully");


};



return(

<div>


<h1>
Register
</h1>



<input

name="email"

placeholder="Email"

value={user.email}

onChange={handleChange}

/>



<input

name="password"

type="password"

placeholder="Password"

value={user.password}

onChange={handleChange}

/>



<button onClick={submitForm}>

Register

</button>



</div>

);


}


export default Register;