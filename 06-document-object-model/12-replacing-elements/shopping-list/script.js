const replaceFirstItem = ()=>{
    const firstItem= document.querySelector("li:first-child")

    const li = document.createElement("li")
    li.textContent="Hello Valera!";
    console.log(li)

    firstItem.replaceWith(li)
}


const replaceSecondItem = ()=>{
    const second= document.querySelector("li:nth-child(2)")
    second.outerHTML="<li>Replaced second</li>"

}


//replace all items in the list

const replaceAllItems = ()=>{
    const allesItems= document.querySelectorAll("li")

    allesItems.forEach((item, index)=>index===1? item.innerHTML="Hello children-second item!" : item.innerHTML="Family"
       // item.innerHTML="Hello children!"
        //item.outerHTML="<li>Hello Vika!</li>"

    )
}


const replaceChildHeading = ()=>{
    const header= document.querySelector("header")
    const h1= document.querySelector("header h1")

    const h2 = document.createElement("h2")
    h2.textContent="All for love"


    header.replaceChild(h2, h1)


}




replaceFirstItem()
replaceSecondItem()
replaceAllItems()
replaceChildHeading()