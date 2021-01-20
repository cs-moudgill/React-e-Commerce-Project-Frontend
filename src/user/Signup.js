import React, {useState} from 'react'
import Base from '../core/Base'
import {Link} from 'react-router-dom'
import { signup } from '../auth/helper';


function Signup() {

    //setting useState.
    const [values,setValues]=useState({ //value of 'values' in useState.for update use setState.
    name:'',
    email:'',
    password:'',
    error:'',
    success:false
});
//destructuring
const {name,email,password,error,success}=values;
//to handle any changes in input form; here sign up form.
const handleChange=(property)=>(event)=>{
    setValues({...values,error:false,[property]:event.target.value}); //...values--->here we are grabbing all the values from useState.
};  //event.target.value get its value from user when this fn trigger.

//handle submit button for signup.
const onSubmit=(event)=>{
event.preventDefault();
setValues({...values,err:false})
signup({name,email,password}) //execute 'signup fn' in auth-->helper-->index.js(fetch operation).
.then((data)=>{
    if(data.error){
        setValues({...values,error:data.error,success:false})
    }else{
        setValues({...values,name:'',email:'',password:'',error:'',success:true})
    }
})
.catch(console.log('Error in Signup'));
}

const signUpForm=()=>{  //declare globally...a signup form from bootstrap.
    return (
        <div className="form-signin w-50 p-4 offset-sm-3">
  <form>
  <label className="visually-hidden">Name</label>
    <input type="text" id="inputName" className="form-control" placeholder="Name" required onChange={handleChange('name')} />
    <label className="visually-hidden">Email address</label>
    <input type="email" id="inputEmail" className="form-control my-3" placeholder="Email address" required onChange={handleChange('email')}/>
    <label className="visually-hidden">Password</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={handleChange('password')}/>
   <br/>
    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={onSubmit}>Submit</button>
  </form>
</div>
    )
}
//above function will be called below inside the Signup fn.
    return (
        
        <Base title="Signup page" description="A page for user to signup">
        
            {signUpForm()}
            
        </Base>
    )
    
}

export default Signup
