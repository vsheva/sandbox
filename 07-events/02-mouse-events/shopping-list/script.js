
const logo = document.querySelector("img");

const onClick = () =>{
    console.log("click event")
}

const onDoubleClick = () =>{
    if(document.body.style.backgroundColor !=="purple") {
        document.body.style.backgroundColor ="purple";
        document.body.style.color = "black"
    } else {
        document.body.style.backgroundColor ="green";
        document.body.style.color = "white"
    }

}

logo.addEventListener("click", onClick)
logo.addEventListener("dblclick", onDoubleClick)
