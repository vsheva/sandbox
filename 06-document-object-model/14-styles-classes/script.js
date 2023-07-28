const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items= document.querySelectorAll("li");

let pres=()=>{
    // console.log("1")
    // text.className="card dark"

    //console.log(itemList.classList);
    //itemList.classList.forEach((c)=>console.log(c));
    // text.classList.add("dark");
    // text.classList.remove("card");
    //text.classList.toggle("hidden");
    text.classList.replace("card", "dark");

    //change style

    //itemList.style.color = "blue";

    items.forEach((item, index)=>{
        item.style.color="blue"
        if (index===1) {
            item.style.color="red"
        }
    })

}

document.querySelector("button").onclick = pres;

