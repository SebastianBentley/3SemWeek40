//Opgave a
function myFilter(array, callback){
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element);
        if (newItem !== undefined){
            arrayCopy.push(newItem);
        }
        
    });
    return arrayCopy;
}

//Opgave b
function myMap(array, callback) {
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element);
        arrayCopy.push(newItem);
    });
    return arrayCopy;
}

//Test Opgave a + b
var array = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "Jens", "Bo", "ana", "anavn"];

function selectNamesStartingWith(a) {
    if (a.startsWith("a")){
        return a;
    };
}

var filteredArray = myFilter(array, selectNamesStartingWith);

function myMapCallbackfunction(a){
    return a.split("").reverse().join("");
}

console.log("\nOpgave a:\n" + myFilter(array, selectNamesStartingWith));

console.log("\nOpgave b:\n" + myMap(array, myMapCallbackfunction));
