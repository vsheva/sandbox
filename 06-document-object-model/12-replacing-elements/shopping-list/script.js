const replaceFirstItem = ()=>{
    const firstItem= document.querySelector("li:first-child")

    const li = document.createElement("li")
    li.textContent="Hello Valera!";
    console.log(li)

    firstItem.replaceWith(li)
}

replaceFirstItem()