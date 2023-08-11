const itemForm = document.getElementById("item-form");

const submitHandler = (e) => {
    e.preventDefault();

    const formInput = document.getElementById("item-input").value
    const priority = document.getElementById("priority-input").value


    if (formInput === "" || priority === "0") {
        alert("Fill in input and/or select priority");
        return;
    }

    //console.log(formInput, priority)
}

itemForm.addEventListener("submit", submitHandler);


const onSubmit = (e) => {
    e.preventDefault();

    const formData= new FormData(itemForm);

    const item = formData.get("item");
    const priority = formData.get("priority");

    const entr= formData.entries();

    for(let item of entr) {
        console.log("item", item[1])
    }



    console.log(entr)


}

itemForm.addEventListener("submit", onSubmit);