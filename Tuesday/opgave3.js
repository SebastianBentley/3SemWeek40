//Opgave a
var numbers = [1, 3, 5, 10, 11];
var result = numbers.map(function (a, index) {
    if (index === 0) {
        return a += 2;
    } else if (index === 1) {
        return a += 5;
    }
    else if (index === 2) {
        return a += 10;
    }
    else if (index === 3) {
        return a += 11;
    } else {
        return a;
    }

})

console.log(result);

//Opgave b
var names = ["Hassan", "Peter", "Jan", "Boline"];

var navigationSet = names.map(n => `<a href=\"\">${n}</a>`)

console.log(navigationSet.join("\n"))

//Opgave c
var persons = [{ name: "Hassan", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Boline", phone: "79345" }];

var tableHeader = `
<table>
    <tr>
        <th>Name</th>
        <th>Phone</th>
    </tr>
`;

var tableContent = persons.map(n => `    <tr>
        <td>${n.name}</th>
        <td>${n.phone}</th>
    </tr>`);


var resultTable = tableHeader + tableContent.join("\n") + "\n</table>"
console.log(resultTable)