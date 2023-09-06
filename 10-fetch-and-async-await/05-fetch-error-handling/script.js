// fetch("https://httpstat.us/404")
//     .then((res) => res)
//     .then(() => console.log("Hello, world!"))
//     .catch((err) => console.log(err))


// Test with response.ok
// fetch("https://httpstat.us/404")
//     .then((res) => {
//         ////////////////////console.log(res.ok)// false; res.ok===false ...!res.ok
//         if (!res.ok) {
//             throw new Error("Bad request");
//         }
//         return res;
//     })
//     .then(() => console.log("Hello, world!"))
//     .catch((err) => console.log(err))


//Check for specific code
fetch("https://httpstat.us/500")
    .then((res) => {
        ////////////////////console.log(res.ok)// false; res.ok===false ...!res.ok
        if (res.status === 404) {
            throw new Error("Client error");
        } else if (res.status === 500) {
            throw new Error("Server Error");
        }else if (res.status !== 200) {
            throw new Error("Bad request");
        }
        return res;
    })
    .then(() => console.log("Congratulations! Good request"))
    .catch((err) => console.log(err))


//Catch runs on a network error
// fetch("https://hello123.net")
//     .then((res) => res)
//     .then(() => console.log("Hello, world!"))
//     .catch((err) => console.log(err))