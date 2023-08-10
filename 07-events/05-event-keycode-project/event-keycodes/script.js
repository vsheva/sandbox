


window.addEventListener("keydown", (e)=>{

    const insert= document.querySelector("#insert");

    insert.innerHTML =`
    <div class="key">
        ${e.key===" "? "Spaсe" :e.key}
        <small>e.key</small>
      </div>

      <div class="key">
        ${e.keyCode}
        <small>e.keyCode</small>
      </div>

      <div class="key">
        ${e.code}
        <small>event.code</small>
      </div>
    
    `



})


















//2

//
// const keyDownHandler=(e)=>{
//     const insert = document.querySelector("#insert")
//
//     const keyObj = {
//         "e.key ": e.key ===" "? "Space": e.key,
//         "e.keyCode": e.keyCode,
//         "e.code": e.code
//     }
//
//     for(let key in keyObj) {
//         const div= document.createElement("div");
//         div.innerHTML = ""
//         div.className = "key"
//
//         console.log(div)
//
//         const small= document.createElement("small");
//         const smallTextKey=document.createTextNode(key)
//
//         const divKeyValueText= document.createTextNode(keyObj[key]);
//
//         small.appendChild(smallTextKey);
//         div.appendChild(divKeyValueText);
//         div.appendChild(small)
//         insert.appendChild(small)
//     }
//
//
//
// }
//
// window.addEventListener("keydown", keyDownHandler)