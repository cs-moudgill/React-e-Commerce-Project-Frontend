import {API} from '../../backend'

//fetch operation starts here---
export const signup=(user)=>{
return fetch(`${API}/signup`,{
method:'POST',
headers:{
    'Content-Type':'application/json'
},
body:JSON.stringify(user)
})
.then((response)=>{
    return response.json();
})
.catch(err=>console.log(err));
};

export const signin=(user)=>{   //user : email & password.
    return fetch(`${API}/signin`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(user)
    })
    .then((response)=>{
        return response.json();
    })
    .catch(err=>console.log(err));
    };

export const authenticate=(data,next)=>{ //here data : token and Signed-In user information.
    if(typeof window!=="ündefined"){
        localStorage.setItem('jwt',JSON.stringify(data));
        console.log(localStorage);
        next();
    }
}

export const signout=next=>{
    if(typeof window!=="ündefined"){
        localStorage.removeItem('jwt');
        next();
        return fetch(`${API}signout`,{   //get back to backend.
            method:'GET'
        })
        .then((response)=>console.log('signout success'))
        .catch((err)=>console.log(err))
    }
    };

    export const isAuthenticated=()=>{ // check to keep signed in.
        if(typeof window=='undefined'){
            return false
        }
        if(localStorage.getItem('jwt')){
            return JSON.parse(localStorage.getItem('jwt'))
        }else{
            return false;
        }
    }
  
