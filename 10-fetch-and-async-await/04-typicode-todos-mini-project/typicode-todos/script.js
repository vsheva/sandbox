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
    div.classList.add("tudu") // !!!
    //div.setAttribute("data-id", todo.id);
    div.dataset.id = todo.id; //<div data-id="1">delectus aut autem</div>  !!!   https://ru.hexlet.io/qna/javascript/questions/kak-rabotat-metod-dataset-v-js

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
            //console.log(newTodo);
            showTodo(newTodo)
        })
}

// PUT

const toggled = (e) => {
    if (e.target.classList.contains("tudu")) {
        e.target.classList.toggle("done") //добавляем done
    }
    // !!!   putChange(e.target.dataset.id, e.target.classList.toggle("done"))

    const id = e.target.dataset.id

    // return fetch(`${apiUrl}/${id}`, {
    //     method: 'PUT',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({completed: e.target.classList.contains("done")})
    // })

    putRequest(e.target.dataset.id, e.target.classList.contains("done"))   //!!!
}

const putRequest = (id, complete) => {
    return fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({completed: complete})
    })
        .then((response) => response.json())
        .then((data) => (data))
}


//DELETE

const removeTodo = (e) => {
    const id = e.target.dataset.id;
    console.log(id)
    return fetch(apiUrl, {method: 'DELETE'})
        .then((res) => res.json())
        .then(() => e.target.remove()) //!!!
}


const init = () => {
    document.addEventListener("DOMContentLoaded", getData);
    document.getElementById("todo-form").addEventListener("submit", createTodo);
    document.getElementById("todo-list").addEventListener("click", toggled);
    document.getElementById("todo-list").addEventListener("dblclick", removeTodo);
}

init();