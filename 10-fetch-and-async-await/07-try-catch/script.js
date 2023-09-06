// try {
//     console.log(x)
// } catch (err) {
//     console.log("Error: " + err)
// }

//console.log(b)


function double(number) {
    if (isNaN(number)) {
        throw new Error(number + " is not a number")
    }
    return number * 2
}


try {
    let a = double("test")
    console.log(a)
} catch(err) {
    console.log(err)
}