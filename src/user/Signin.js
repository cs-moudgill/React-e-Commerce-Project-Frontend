import React, {useState} from 'react'
import Base from '../core/Base'
import {Link} from 'react-router-dom'

const signInForm=()=>{  //declare globally
    return (
        <div className="form-signin w-50 offset-sm-3">
  <form>
    <label className="visually-hidden">Email address</label>
    <input type="email" id="inputEmail" className="form-control my-3" placeholder="Email address" required />
    <label className="visually-hidden">Password</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
   <br/>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</div>
    )
}

function Signin() {
    return (
        <Base title="Sign in page" description="A page for user to signin">
            {signInForm()}
        </Base>
    )
}

export default Signin
