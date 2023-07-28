const li = document.createElement("li");

const addFruit=(fruit)=>{
  li.innerHTML =`${fruit}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`

  const items=document.querySelector(".items")
  const newFruit=items.appendChild(li)

}

addFruit("Papaya")









// const li = document.createElement('li');

// li.innerHTML = ` Peaches
// <button class="remove-item btn-link text-red">
//   <i class="fa-solid fa-xmark"></i>
// </button>`;

// document.querySelector('ul').appendChild(li);

// console.log(li);

//--//
//1
// const createLiElement = element => {
//   const li = document.createElement('li');

//   li.innerHTML = ` ${element}
// <button class="remove-item btn-link text-red">
//   <i class="fa-solid fa-xmark"></i>
// </button>`;

//   document.querySelector('ul').appendChild(li);
// };

// createLiElement('Olives');

//2
//----------------------------------------------------------------//
//----------------------------------------------------------------//
//----------------------------------------------------------------//
//----------------------------------------------------------------//

//Clean and performant

// const createNewItem = item => {
//   const li = document.createElement('li');

//   const text = document.createTextNode(item);

//   const button = document.createElement('button');
//   button.className = 'remove-item btn-link text-red';
//   console.log(button);

//   const icon = document.createElement('i');
//   icon.className = 'fa-solid fa-xmark';

//   document.querySelector('ul').appendChild(li);
//   li.appendChild(text);
//   li.appendChild(button);
//   button.appendChild(icon);
// };

// createNewItem('Tomatoes');
// createNewItem('Peaches');

//----------------------------------------------------------------//
//----------------------------------------------------------------//
//----------------------------------------------------------------//
//----------------------------------------------------------------//

//3
//----------------------------------------------------------------//
//----------------------------------------------------------------//
//----------------------------------------------------------------//
//----------------------------------------------------------------//
//3
//refactoring

/**

const createNewItem = item => {
  const li = document.createElement('li');

  const text = document.createTextNode(item);

  const button = createButton('remove-item btn-link text-red');
  const icon = createIcon('fa-solid fa-xmark');

  document.querySelector('ul').appendChild(li);
  li.appendChild(text);
  li.appendChild(button);
  button.appendChild(icon);
};

const createButton = classes => {
  const button = document.createElement('button');
  button.className = classes;
  return button;
};

const createIcon = classes => {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
};

createNewItem('Tomatoes');
createNewItem('Peaches');
createNewItem('JavaScript');

*/
