import "./style.css"
import "bootstrap/dist/css/bootstrap.css"


function showInfo(URL) {
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      let info = `
  Country: ${data[0].name}
  Population: ${data[0].population}
  Area: ${data[0].area}
  Borders: ${data[0].borders}
  `
      document.getElementById("showInfo").innerHTML = info;
    })
}




document.getElementById("svg2").addEventListener("click", function (e) {
  e.preventDefault;
  let target = e.target;
  let URL = "http://restcountries.eu/rest/v1/alpha?codes="+target.id; 
  
  document.getElementById(target.id).style = "fill: red"

  showInfo(URL)
})