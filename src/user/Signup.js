import React, {useState} from 'react'
import Base from '../core/Base'
import {Link} from 'react-router-dom'

const signUpForm=()=>{  //declare globally...a signup form from bootstrap.
    return (
        <div className="form-signin w-50 p-4 offset-sm-3">
  <form>
  <label for="inputName" className="visually-hidden">Name</label>
    <input type="text" id="inputName" className="form-control" placeholder="Name" required autofocus />
    <label for="inputEmail" className="visually-hidden">Email address</label>
    <input type="email" id="inputEmail" className="form-control my-3" placeholder="Email address" required autofocus />
    <label for="inputPassword" className="visually-hidden">Password</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
   <br/>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</div>
    )
}
//above function will be called below inside the Signup fn.
function Signup() {
    return (
        <Base title="Signup page" description="A page for user to signup">
            {signUpForm()}
        </Base>
    )
}

export default Signup
