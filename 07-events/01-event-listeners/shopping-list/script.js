const btn = document.querySelector("#clear");

const message = () => {
    //document.querySelector("#item-list").remove()

    const ul = document.querySelector("ul")
    const li = ul.querySelectorAll("li")
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
    /**
     const ul = document.querySelector("ul")
    const li = ul.querySelectorAll("li")
    li.forEach(item => item.remove())
     */

    //ul.innerHTML = "";

}

btn.addEventListener("click", message);

//setTimeout(()=> btn.removeEventListener("click",message), 7000);
//setTimeout(()=> btn.click(), 7000);


//btn.onclick= function() {alert("Hello Vika-my beutiful wife!")}