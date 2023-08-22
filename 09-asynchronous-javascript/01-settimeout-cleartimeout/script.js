const hello=()=>{
    document.querySelector("h1").textContent ="Hello Valerii"
}

const timerId=setTimeout(hello, 2000);

document.getElementById("cancel").addEventListener("click", ()=>{
    clearTimeout(timerId)
})