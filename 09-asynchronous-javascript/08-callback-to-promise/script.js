const posts=[
  {title:"Post1", body:"This is Post One"},
  {title:"Post2", body:"This is Post Two"},
]

const createPost=(post)=>{
  let promise =new Promise((resolve, reject)=>{
    setTimeout(()=>{
      posts.push(post);
      let isError = true;
      if(!isError) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  })
  return promise;

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

const showError=(err)=>{
  const h3= document.createElement('h3');
  h3.innerHTML = `<strong>${err}</strong>`
  document.querySelector("#posts").appendChild(h3)
}

let promise=createPost({title:"Post3", body:"This is Post Three"})
promise.then(getPosts).catch(showError)





   // promise.then(getPosts).catch((err)=>console.log(err))




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
