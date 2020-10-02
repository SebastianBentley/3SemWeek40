//Opgave a
var array = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "Jens", "Bo", "ana", "anavn"];

var namesStartWithA = array.filter(n => n.startsWith("a"));
console.log("Opgave 1:\n" + namesStartWithA);

//Opgave b
var reversedNames = array.map(n => n.split("").reverse().join(""));
console.log("\nOpgave2:\n" + reversedNames);
