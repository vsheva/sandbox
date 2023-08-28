fetch("./movies.json")
.then((res)=> {
    console.log(res);
    return res.json();
})
.then((data)=>console.log(data))



fetch("./test.txt")
    .then((response)=> response.text())
    .then((data)=>console.log(data))

fetch("https://api.github.com/users/vsheva")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        document.querySelector("h1").textContent=data.bio
    })
