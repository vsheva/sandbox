console.log(document.getElementById('app-title').getAttribute('id'));

console.log(document.getElementById('app-title').setAttribute('class', 'title'));

console.log(document.querySelector('input[type="text"]'));

const firstElem = document.querySelector('li:nth-child(1)');

firstElem.innerHTML = '<h1>Valera</h1>';

firstElem.style.color = 'green';

const button = document.querySelector('#clear');
button.innerText = 'Shevchenko';
button.style.backgroundColor = 'orange';

const list = document.querySelector('ul');

list.querySelector('li').style.color = 'blue';

const listItem = document.querySelectorAll('li');
console.log(listItem);
listItem[3].style.color = 'yellow';
listItem[2].style.color = 'pink';

listItem.forEach((item, index) => {
  item.style.color = 'red';

  if (index === 0) {
    item.innerHTML = `Oranges
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  }
});
