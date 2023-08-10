const header = document.querySelector("h1");
const itemInput = document.getElementById("item-input");
const priorityInput = document.querySelector("#priority-input");
const checkbox = document.querySelector("#checkbox");


const inputHandler = (e) => {
    console.log(e.target.value)
    header.innerHTML = e.target.value;

}


const checkBoxHandler = (e) => {
    console.log(e.target.checked)
    header.textContent= e.target.checked ? "Checked" : "Not Checked"


}

const onFocusHandler =(e)=>{
    itemInput.style.outlineStyle="solid";
    itemInput.style.outlineColor="red";
    itemInput.style.outlineWidth="1px";
}

const onBlurHandler =(e)=>{
    itemInput.style.outlineStyle="none";

}


itemInput.addEventListener("input", inputHandler);
//itemInput.addEventListener("change",inputHandler);
//priorityInput.addEventListener("change",inputHandler);

checkbox.addEventListener("input", checkBoxHandler)


itemInput.addEventListener("focus", onFocusHandler );
itemInput.addEventListener("blur", onBlurHandler );