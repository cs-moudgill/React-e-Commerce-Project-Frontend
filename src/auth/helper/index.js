import {API} from '../../backend'


export const signup=(user)=>{
return fetch(API,{
method:'POST',
headers:{
    'Content-Type':'application-json'
},
body:JSON.stringify(user)
})
.then((response)=>{
    return response.json();
})
.catch(err=>console.log(err));
};

export const signin=(user)=>{
    return fetch(API,{
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
