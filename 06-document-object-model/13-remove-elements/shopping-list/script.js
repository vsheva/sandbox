// const removeButton =()=>{
//     const button = document.querySelector("li:nth-child(2)").remove()
// }
//
// removeButton()

const removeFirstElement = () => {
    const ul = document.querySelector("ul");
    const first = document.querySelector("li:first-child");

    ul.removeChild(first)
}

const removeItem = (itemNumber) => {
    const ul = document.querySelector("ul");
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li)
}


const removeItem2 = (itemNumber) => {
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li")[itemNumber];

    ul.removeChild(li)

}


const removeItem3 = (itemNumber) => {
    const li = document.querySelectorAll("li");
    li[itemNumber - 1].remove()
}

const removeItem4 = (itemNumber) => document.querySelectorAll("li")[itemNumber - 1].remove()


//removeFirstElement()
//removeItem(3)
//removeItem2(3)
removeItem3(1)
removeItem3(3)