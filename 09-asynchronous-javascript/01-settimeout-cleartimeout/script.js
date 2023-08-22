const hello=()=>{
    document.querySelector("h1").textContent ="Hello Valerii"
}
c
const timerId=setTimeout(hello, 2000);

document.getElementById("cancel").addEventListener("click", ()=>{
    clearTimeout(timerId)
})