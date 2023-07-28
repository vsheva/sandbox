//`clientX` - x position mouse relative to the window
//`clienty` - y position mouse relative to the window
//`offsetX` - y position mouse relative to the element
//`clientY` - y position mouse relative to the element

const logo = document.querySelector("img")

const onClick= (e)=> {
    // console.log(e.target)
    // console.log(e.currentTarget)

   // console.log(e.clientX)
    //console.log(e.clientY)
    //console.log(e)
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.pageX);
    // console.log(e.pageY);

    // console.log(e.screenX);
    // console.log(e.screenY);
};

//logo.addEventListener("click", onClick)




//document.body.addEventListener("click", onClick)


/*
const onEventHandler =(e)=>{
    e.preventDefault();
    console.log("Click event preveted by default");
}



document.querySelector("a").addEventListener("click", onEventHandler)*/




 const img = document.querySelector("img")

function onDrag (e) {
    const ul =document.querySelector("ul")
    ul.innerHTML =`X: ${e.offsetX} Y:${e.offsetY}`;

}

img.addEventListener("drag", onDrag)



// const h2=document.createElement("h1")
// h2.innerHTML ="Hello Valera"
// document.body.appendChild(h2)

const ul =document.querySelector("ul")
const first=ul.querySelector("li:first-child")

function onHandleClick (e){
   const h1= document.querySelector("h1")
       h1.innerHTML=`X: ${e.clientX}, Y: ${e.clientY}`
}

first.addEventListener("drag", onHandleClick)

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/