
// signup
export const signup = (user) => {

    return fetch(`http://localhost:5001/signup`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((fetch_data) => {
        return fetch_data.json()
    }).catch((error) => {
        console.log("signup error", error);
    })

}

// signin
export const signin = (user) => {
    return fetch(`http://localhost:5001/signin`,
        {
            method: "POST",
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        }
    ).then((response)=>{
        return response.json();
    }).catch((error)=>{
        console.log("error is signin",error);
    })
}

// signout
export const signout=(next)=>{
    if(window!==undefined){
        return  fetch(`http://localhost:5001/signout`,{
            method:"GET"
        }).then((response)=>{
            localStorage.removeItem("jwt");
            response.json().then((si)=>{
                console.log("logout response",si);
            })
            return response.json()
        }).catch((error)=>{
            console.log("error in signout function",error);
        })

    }
}

export const get_jwt=()=>{
    return JSON.parse(localStorage.getItem('jwt'))
}

export  const data_geter=async()=>{
   return await fetch(`http://localhost:5001/list`).then(async(data)=>{
       return await data.json().then(async(json_data)=>{
           console.log("data is here",json_data ,"data type",typeof (json_data));
         return json_data;
         })
       }).catch((error)=>{
         console.log("error",error)
         return error
       })
 }