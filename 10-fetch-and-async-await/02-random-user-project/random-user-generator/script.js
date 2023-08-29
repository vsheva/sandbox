const fetchData = () => {
    showSpinner();
    fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((data) => {
            //console.log(data.results[0])
            hideSpinner();
            showUser(data.results[0])
        });
}

const showUser = (user) => {
    const userDiv = document.getElementById("user");

    if (user.gender === 'female') {
        document.body.style.backgroundColor = "purple"
    } else if (user.gender === 'male') {
        document.body.style.backgroundColor = "lightblue"
    } else {
        document.body.style.backgroundColor = "white"
    }

    userDiv.innerHTML = ` <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src=${user.picture.large}
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.city} ${user.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
          </div>
        </div>`

}

const showSpinner = () => {
    document.querySelector(".spinner").style.display = "block"
}

const hideSpinner = () => {
    document.querySelector(".spinner").style.display = "none"
}


document.getElementById("generate").addEventListener("click", fetchData)