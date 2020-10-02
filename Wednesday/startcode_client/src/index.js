import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "./userFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
function makeListItems() {
  const jokes = jokeFacade.getJokes();
  let jokeList = jokes.map(joke => `<li>${joke}</li>`);
  const listItemsAsStr = jokeList.join("");
  document.getElementById("jokes").innerHTML = listItemsAsStr;
}
makeListItems();

document.getElementById("jokeByIdBtn").addEventListener("click", function () {
  let id = document.getElementById("jokeByIdText").value;
  document.getElementById("jokeByIdPara").innerHTML = jokeFacade.getJokeById(id);
});

document.getElementById("addJokeBtn").addEventListener("click", function () {
  let jokeText = document.getElementById("addJokeText").value;
  if (jokeText !== "") {
    jokeFacade.addJoke(jokeText);
    makeListItems();
  }

});



/* JS For Exercise-2 below */
function getJokeFromAPI() {
  return fetch("https://studypoints.info/jokes/api/jokes/period/hour")
    .then(respone => {
      return respone.json();
    })
}

function getJoke() {
  getJokeFromAPI().then(function (result) {
    return document.getElementById("ex2Para").innerHTML = result.joke;
  })
}

document.getElementById("ex2Btn").addEventListener("click", function () {
  getJoke();
  setInterval(function () {
    getJoke()
  }, 3600000)


})


/* JS For Exercise-3 below */
//Get All users
function getAllUsers() {
  userFacade.getUsers()
    .then(users => {
      const userRows = users.map(user => `
  <tr>
    <td>${user.id}</td>
    <td>${user.age}</td>
    <td>${user.name}</td>
    <td>${user.gender}</td>
    <td>${user.email}</td>
  </tr>
  `)
      const userRowsAsString = userRows.join("");
      document.getElementById("allUserRows").innerHTML = userRowsAsString;
    })
}
getAllUsers();

//Find user by id
function findUser() {
  let id = document.getElementById("findById").value;
  userFacade.getUser(id)
    .then(user => {
      const newUser = {
        "age": user.age,
        "name": user.name,
        "gender": user.gender,
        "email": user.email
      }
      const newUserAsString = JSON.stringify(newUser)
      document.getElementById("userFound").innerHTML = newUserAsString;
    })
}

document.getElementById("findByIdBtn").addEventListener("click", findUser)


//Add a user
function addUser() {
  let age = document.getElementById("ageInput").value;
  let name = document.getElementById("nameInput").value;
  let gender = document.getElementById("genderInput").value;
  let email = document.getElementById("emailInput").value;
  const newUser = {
    "age": age,
    "name": name,
    "gender": gender,
    "email": email
  }
  userFacade.addUser(newUser)
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("errorMsg").innerHTML = e.msg)
      }
      else { console.log("Network Error") }
    });
  getAllUsers();
}

document.getElementById("addUserBtn").addEventListener("click", addUser);


//Edit User
function editUser() {
  let id = document.getElementById("idEdit").value;
  let age = document.getElementById("ageEdit").value;
  let name = document.getElementById("nameEdit").value;
  let gender = document.getElementById("genderEdit").value;
  let email = document.getElementById("emailEdit").value;
  const newUser = {
    "age": age,
    "name": name,
    "gender": gender,
    "email": email
  }
  userFacade.editUser(id, newUser)
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("errorMsg").innerHTML = e.msg)
      }
    });
  getAllUsers();
}

document.getElementById("editUserBtn").addEventListener("click", editUser);


//Delete User
function deleteUser() {
  let id = document.getElementById("deleteById").value;
  userFacade.deleteUser(id)
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("errorMsg").innerHTML = e.msg)
      }
    });
  getAllUsers();
  document.getElementById("deleteMsg").innerHTML = "User deleted";
}

document.getElementById("deleteByIdBtn").addEventListener("click", deleteUser);
/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



