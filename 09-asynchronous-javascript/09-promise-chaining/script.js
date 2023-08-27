const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({name: 'John', age: 30});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});

promise
    .then((user) => {
        console.log(user);
        return user.name
    })
    .then((name) => {
        console.log(name);
        return name.length
    }).then((nLength) => {
    console.log(nLength)
})
    .catch((error) => {
        console.log(error);
        return 123123
    })
    .then((num)=> {console.log("This will run no matter what", num)})
