// window.addEventListener("keydown", (e)=>{
//
//     const insert= document.querySelector("#insert");
//
//     insert.innerHTML =`
//     <div class="key">
//         ${e.key===" "? "Spaсe" :e.key}
//         <small>e.key</small>
//       </div>
//
//       <div class="key">
//         ${e.keyCode}
//         <small>e.keyCode</small>
//       </div>
//
//       <div class="key">
//         ${e.code}
//         <small>event.code</small>
//       </div>
//
//     `
//
// })


//2

const insert = document.querySelector("#insert");


const eventHandler = (e) => {
    insert.innerHTML=""

    const keyCodes = {
        "e.key": e.key === " " ? "Spaсe" : e.key,
        "e.keyCode": e.keyCode,
        "e.code": e.code,
    }

    console.log(keyCodes) //{e.key: 'f', e.keyCode: 70, e.code: 'KeyF'}

    for (let key in keyCodes) {
        const div = document.createElement('div');
        div.className = "key"
        div.textContent = keyCodes[key]


        const small = document.createElement('small')
        small.textContent =key


        div.appendChild(small);
        insert.appendChild(div)

    }


}


window.addEventListener("keydown", eventHandler)