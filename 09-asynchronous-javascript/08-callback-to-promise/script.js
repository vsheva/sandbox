
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {

  let promise= new Promise((resolve, reject) =>{
    setTimeout(() => {
      let error = true;

      posts.push(post);

      if(!error){
        resolve()
      } {
        reject("There is an Error!")// вызов со входом
      }

    }, 2000);
  })

  return promise;

}

function getPosts() {
  setTimeout(() => {

    posts.forEach(function (el) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${el.title}</strong> - ${el.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}


const getError=(el)=>{  //структурный cb со входом
  const div = document.createElement('div');
  div.innerHTML = `<strong>${el}</strong>`
  let postsDiv = document.getElementById('posts');
  postsDiv.appendChild(div)
}

//createPost({ title: 'Post Three', body: 'This is post' }, getPosts);
createPost({ title: 'Post Three', body: 'This is post' }).then(getPosts).catch(getError);




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
