/**
 const posts=[
    {title:"Post1", body:"This is Post One"},
    {title:"Post2", body:"This is Post Two"},
]

const createPost=(post, cb)=>{
    setTimeout(()=>{
        posts.push(post);
        cb(); //!!!
    }, 2000);

}

const getPosts=()=>{
    setTimeout(()=>{

        posts.forEach((el)=>{
            const div= document.createElement('div');
            div.innerHTML = `<strong>${el.title}</strong> - ${el.body}`
            document.querySelector("#posts").appendChild(div)
        })
    }, 1000)
}

createPost({title:"Post3", body:"This is Post Three"}, getPosts);
 */


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; // !!! или true, чтобы была ошибка

        if (!error) {
            console.log("Main Task 1 completed");
            resolve({name: "Valerii", job: "programmer", age: 20}) // в структоруной функции вызывается коллбек с входящими данными или нет. Если есть на входе что-то, то не забываем прописать на вход в структурном коллбэке в 16 строке)
        } else {
            reject("Something went wrong") //в структурной ф-ии вызываем коллбек, в который подставился на вход режект и который собственно и вызвался с строкой на входе
        }
    }, 1000)
})

promise
    .then((elem) => {console.log(elem)}) // вызов, куда заходит в качестве аргумента структурный коллбек // он может заходить как ссылкой на переменную без скобок (иначе будет вызов) function func(callback) или развернуто function func(func(){})
    .catch((err)=>console.log(err))// !!!
    .finally(()=>console.log("Promise were resolved or rejected"))

console.log("Hello from Promise!")












// .then((errorel)=>console.log(errorel)) !!! передаем в вызов структурный коллбэк, но ошибку не отлавливаем


// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Async Task 2 completed");
//         resolve()
//     }, 1000)
// }).then(()=>console.log("Async task 2-2"))




//1. когда let error= false и все хорошо!
// Hello from Promise!
// script.js:6 Main Task 1 completed
// script.js:16 {name: 'Valerii', job: 'programmer', age: 41}
//Promise were resolved or rejected

//2. когда  let error = true; есть ошибка и она отловлена
//    Hello from Promise!
/** script.js:18 Something went wrong */ // !!! ОТЛОВЛЕННАЯ ОШИБКА


//3. когда  let error = true; есть ошибка и она не отловлена - код дает ошибку
// Hello from Promise!
/**Uncaught (in promise) Something went wrong */ // !!!ОШИБКА
