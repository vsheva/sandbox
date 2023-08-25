const btn = document.getElementById("joke-btn")
const div = document.getElementById("joke")

const generate=()=>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api.chucknorris.io/jokes/random')

    xhr.onreadystatechange = function(){
        if (this.readyState === 4) {
            if (this.status === 200) {
               div.innerHTML = JSON.parse(this.responseText).value
            } else{
                div.innerHTML="Something wrong"
            }
        }
    };

    xhr.send();
}


btn.addEventListener("click",generate);
document.addEventListener("DOMContentLoad", generate)