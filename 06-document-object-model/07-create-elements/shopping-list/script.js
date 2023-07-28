const div= document.createElement('div')
div.className="myClass";
div.id="myID";
div.setAttribute("title", "city")

div.innerText="Hello VA"

console.log(div)

const ul= document.querySelector('#item-list').appendChild(div);

















// const div = document.createElement('div');
// div.className = 'my-color';
//
// div.id = 'my-id';
//
// div.setAttribute('title', 'My Element');
//
// //div.textContent = 'Hello World';
//
// const text = document.createTextNode('Hello Valera');
//
// //div.appendChild(text);
// document.body.appendChild(text);
//
// document.querySelector('ul').appendChild(text);
//
// console.log(div);
