// const getUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }
//
// getUsers()


// const getUsers = async () => {
//     try {
//         //const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const response = await fetch("http://httpstat.us/500");
//
//         if(!response.ok) {
//             throw new Error("Request failed");
//         }
//
//         const data = await response.text();
//
//         console.log(data)
//
//     } catch (err) {
//         console.log(err)
//     }
// }
//
// getUsers()


const getPosts = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!response.ok) {
        throw new Error("Request failed");
    }

    const data = await response.json();
    console.log(data)

}

getPosts().catch((err) => console.log(err))
