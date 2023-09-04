const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getData = () => {
    fetch(apiUrl + "?_limit=7")
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);
            data.map((todo) => {
                showTodo(todo)
            })
        })
}


const showTodo = (todo) => {
    const div = document.createElement("div");
    div.textContent = todo.title
    div.setAttribute("data-id", todo.id);

    if (todo.completed) {
        div.classList.add("done")
    }

    document.getElementById("todo-list").appendChild(div);
}

const createTodo = (e) => {
    e.preventDefault();

    const newTodo = {
        title: document.getElementById("inp").value, //!
        completed: false,
    }

    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => res.json())
        .then((newTodo) => {
            showTodo(newTodo)
        })
}

const init = () => {
    document.addEventListener("DOMContentLoaded", getData);
    document.getElementById("todo-form").addEventListener("submit", createTodo);
}

init();