import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade"


//Fetch all persons
function showAllPersons() {
  personFacade.getAllPersons()
    .then(data => {
      const persons = data.all;
      const tableRows = persons.map(person => `
    <tr>
      <td>${person.id}</td>
      <td>${person.fName}</td>
      <td>${person.lName}</td>
      <td>${person.phone}</td>
      <td><a href="#" class="btndelete" id="${person.id}">delete</a> / <a href="#" class="btnedit" id="${person.id}" data-toggle="modal" data-target="#myModal2">edit</a></td>
    </tr>
  `)
      const tableRowsAsString = tableRows.join("");
      document.getElementById("tbody").innerHTML = tableRowsAsString;
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => {
          console.log(e.message)
          document.getElementById("error").innerHTML = e.message;
        })
      }
      else { console.log("Network error"); }
    })
};
showAllPersons();

//Reload Data button
document.getElementById("reload").addEventListener("click", showAllPersons)

//Add New Person
function addPerson() {
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let phoneNumber = document.getElementById("phone").value;
  const newPerson = {
    "fName": firstName,
    "lName": lastName,
    "phone": phoneNumber
  }
  personFacade.addPerson(newPerson)
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("error").innerHTML = e.msg)
      }
      else { console.log("Network Error") }
    });
}

document.getElementById("savebtn").addEventListener("click", addPerson)

//Delete person
function deletePerson(id) {
  personFacade.deletePerson(id)
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("error").innerHTML = e.msg)
      }
    });
  showAllPersons();
}


document.getElementById("tbody").addEventListener("click", function (e) {
  e.preventDefault();
  var target = e.target;
  if (target.className === "btndelete") {
    deletePerson(target.id);
  }

  if (target.className === "btnedit") {
    document.getElementById("editId").innerHTML = target.id;
  }

})

document.getElementById("savebtnedit").addEventListener("click", function(e){
  let id = document.getElementById("editId").innerHTML;
  editPerson(id);
})

//Edit person
function editPerson(id) {
  let firstName = document.getElementById("efname").value;
  let lastName = document.getElementById("elname").value;
  let phoneNumber = document.getElementById("ephone").value;
  const newPerson = {
    "fName": firstName,
    "lName": lastName,
    "phone": phoneNumber
  }
  personFacade.editPerson(id, newPerson)
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("errorMsg").innerHTML = e.msg)
      }
    });
  showAllPersons();
}

