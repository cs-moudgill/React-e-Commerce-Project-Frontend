import { API } from "../../backend";

export const createCategory=(userId,token,category)=>{
return fetch(`${API}/category/create/${userId}`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(category)
}
)
.then((response)=>{
    return response.json; //category created received here and then returned.
})
.catch((err)=>{
    console.log(err);
})
}