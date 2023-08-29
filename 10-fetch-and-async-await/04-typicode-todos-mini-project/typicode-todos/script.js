const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
    fetch(apiUrl + "?_limit=5")
        .then((response) => response.json())
        .then((data) => {
           data.map((el)=>addTodoToUI(el))  //!!!
        })
}


const addTodoToUI = (todo) => {
        const div = document.createElement("div");
        div.textContent = todo.title;
        div.setAttribute("data-id", todo.id)

        if (todo.completed) {
            div.classList.add("done")
        }
        document.getElementById("todo-list").appendChild(div);

}

const createTodo = (e) => {
    e.preventDefault();//console.log(e.target.firstElementChild.value)

    fetch(apiUrl, {
        method: "POST",

        body: JSON.stringify({
            title: document.getElementById("inp").value,
            completed: false
        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            addTodoToUI(data)
        })

}

const initTodo = () => {
    document.addEventListener("DOMContentLoaded", getTodos)
    document.getElementById("todo-form").addEventListener("submit", createTodo)
}

initTodo()