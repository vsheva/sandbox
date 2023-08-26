// function toggle(e) {
//   console.log('callback ran');
//  e.target.classList.toggle('danger')
// }
//
// document.querySelector('button').addEventListener('click', toggle);



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


///--------------------------///

function fetchData(url, cb) {
  // 1. Make API request to url
  // 2. If response successful, execute callback
  cb(res);
}

function callback(res) {
  // Do something with results
}

// Do something
fetchData('https://sitepoint.com', callback);
// Do something else




// https://www.programiz.com/javascript/callback
//https://www.sitepoint.com/callbacks-javascript/ !!!
//https://www.w3schools.com/js/js_callback.asp

/**

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

 */


function myDisplayer(something) {
  document.getElementById("posts").innerHTML = something;
}
function sum(a, b, callback) {
  let sum = a+b
  callback(sum)

}

sum(5, 5, myDisplayer)