const promise = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        resolve({name:"Valerii", job:"programmer"})
    }, 1000)
})

//promise.then((data)=> console.log(data))

const getData=async()=>{
    const resp= await promise;
    //const data= await resp.json();  !!!
    console.log(resp)
}

getData()


//async-await (in async function always)
const getUsers = async()=>{
   const myFetch= await fetch("https://jsonplaceholder.typicode.com/users");
   const data= await myFetch.json()

   console.log(data)
}

getUsers()

//fetch
const getPosts = ()=>{
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=> console.log(data))

}

getPosts()