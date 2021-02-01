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

export const getCategories=()=>{
return fetch(`${API}/categories`,{
    method:'GET'
}).then((response)=>{
    return response.json();
}).catch((err)=>console.log(err))
}

//create product
export const createProduct=(userId,token,product)=>{
    return fetch(`${API}/product/create/${userId}`,{
        method:'POST',
        headers:{
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then((response)=>{
        return response.json();
    })
    .catch((err)=>console.log(err));
}

//get all products.
export const getProducts=()=>{
    return fetch(`${API}/products`,{
        method:'GET'
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err))
    }

    //delete a product

    export const deleteProduct=(productId,userId,token,product)=>{
        return fetch(`${API}/product/${productId}/${userId}`,{
            method:'DELETE',
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then((response)=>{
            return response.json();
        })
        .catch((err)=>console.log(err));
    }

    //get a product

    export const getProduct=(productId)=>{
        return fetch(`${API}/product/${productId}`,{
            method:'GET' 
        }).then((response)=>{
            return response.json();
        }).catch((err)=>console.log(err))
    }

    //update a product

    export const updateProduct=(productId,userId,token,product)=>{
        return fetch(`${API}/product/${productId}/${userId}`,{
            method:'PUT',
            headers:{
                Authorization:`Bearer ${token}`
            },
            body:product //new updated information.
        })
        .then((response)=>{
            return response.json();
        })
        .catch((err)=>console.log(err));
    }