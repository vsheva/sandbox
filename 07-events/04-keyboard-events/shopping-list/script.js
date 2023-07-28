
const inputHandler=(e)=>{
    console.log(e.key)
    //document.querySelector(".filter-tasks").innerHTML=e.key
    //if(e.key==="a") {alert("You pressed  'a' letter")}
    //if(e.keyCode===13) {alert("You pressed  ENTER")}

     console.log(e.code)
}



document.querySelector("#item-input").addEventListener("keydown", inputHandler)

const input=document.querySelector("#item-input")