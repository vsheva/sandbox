const list = document.querySelector("ul");

list.addEventListener("click", (e)=>{
    if(e.target.nodeName==="LI") {
        e.target.remove()
    }
})

list.addEventListener("mouseover", (e)=>{
    if(e.target.nodeName==="LI") {
        e.target.style.color="red"
    }
})

