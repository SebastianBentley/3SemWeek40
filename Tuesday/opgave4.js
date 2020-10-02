var all = ["Hassan", "Peter", "Carla", "Boline"];

//Opgave a
var resultA = all.join("#");
console.log(resultA);

//Opgave b
var numbers = [2, 3, 67, 33];
var resultB = numbers.reduce(function (total, num) {
    return total + num;
})
console.log(resultB);

//Opgave c
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }]


var reducer = function(accumulator, member, index, arr){
    let num = 0;
    arr.forEach(member => {
        num += member.age;
    })
    return num / arr.length;
}

let resultC = members.reduce(reducer);

console.log(resultC)


//Opgave d
const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];

var voteReducer = function(acc, candidate, index, arr){
    let bidenVotes = 0;
    let TrumpVotes = 0;
    let NoneVotes = 0;
    arr.forEach(candidate => {
        if (candidate === "Biden"){
            bidenVotes++;
        } else if(candidate === "Trump"){
            TrumpVotes++;
        } else {
            NoneVotes++;
        }
    });
    let result = {
        "Biden" : bidenVotes,
        "Trump" : TrumpVotes,
        "None" : NoneVotes
    }

    return result;
}


console.log(votes.reduce(voteReducer))


//Lars løsning
const voteReducer2 = (acc, current) => {
    if(acc[current]){
        acc[current]+=1;
    } else {
        acc[vurrent] = 1;
    }
    return acc;
}



