import React, {useState} from 'react'
import Base from '../core/Base'
import {Link,Redirect} from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '../auth/helper';

const Signin=()=>{
    const [values,setValues]=useState({
        email:'',
        password:'',
        error:'',
        loading:false,
        didRedirect:false  //Redirect is part of react router dom.
    });
    
    const {email,password,error,loading,didRedirect}=values;
    const {user}=isAuthenticated;
    const handleChange=(property)=>(event)=>{
        setValues({...values,error:false,[property]:event.target.value}); //...values--->here we are grabbing all the values from useState.
    };

    const successMsg=()=>{
        return (
            <div className="alert alert-success w-50 p-2 offset-sm-3">
            User Created. Please Login <Link to='/signin'>Here</Link>
            </div>
        )
    }
    
    const failureMsg=()=>{
        return (
            <div className="alert alert-danger w-50 p-2 offset-sm-3">{error}</div>
        )
    }

    const onSubmit=(event)=>{
    event.preventDefault();
    setValues({...values,error:false,loading:true});
    signin({email,password})
    .then((data)=>{
        if(data.error){
            setValues({...values,error:true,loading:false});
        }else{
            authenticate(data,()=>{
                setValues({...values,error:false,didRedirect:true});
                console.log('Working Fine');
            })
        }
    })
    .catch(console.log('Sign In request failed.'));
    }


const signInForm=()=>{  //declare globally

    return (
        <div className="form-signin w-50 offset-sm-3">
  <form>
    <label className="visually-hidden">Email address</label>
    <input onChange={handleChange('email')} value={email} type="email" id="inputEmail" className="form-control my-3" placeholder="Email address" required />
    <label className="visually-hidden">Password</label>
    <input onChange={handleChange('password')} value={password} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
   <br/>
    <button onClick={onSubmit} className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</div>
    )
}

    return (
        <Base title="Sign in page" description="A page for user to signin">
            {/* {successMsg()}
            {failureMsg()} */}
            {signInForm()}
            <p className="text-center">{JSON.stringify(values)}</p>
        </Base>
    )
}


export default Signin
