const createPost = (user) => {
    const {title, body} = user;
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            body: body,
        }),
        headers: {
            "Content-Type": "application/json",
            token: "abc123",
        }
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}

createPost({title: "Programmer", body: "Valeriy Shevchenko is working hard to persue his dreams"}) //!!!send

//get back {title: 'Programmer', body: 'Valeriy Shevchenko is working hard to persue his dreams', id: 101}