let intervalID;


const changeColors = () => {
    if(!intervalID ) {
        intervalID = setInterval(changeRandomColors, 500);
    }
}

// const makeColor = () => {
//     if ( document.body.style.backgroundColor !=="black") {
//         document.body.style.backgroundColor ="black";
//         document.body.style.color ="white";
//     } else{
//         document.body.style.backgroundColor ="white";
//         document.body.style.color ="black";
//     }
// }


const changeRandomColors =()=> {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
        document.body.style.backgroundColor = `#${randomColor}`

}





const stop = () =>clearInterval(intervalID)

    document.querySelector("#start").addEventListener("click", changeColors)
    document.querySelector("#stop").addEventListener("click", stop)
