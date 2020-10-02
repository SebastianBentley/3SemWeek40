var members = [
    { name: "Peter", age: 14, gender: "male" },
    { name: "Jan", age: 35, gender: "male" },
    { name: "Janne", age: 25, gender: "female" },
    { name: "Martin", age: 22, gender: "male" }]


function removeGenderOnAll(member) {
    let clone = {...member};
    delete clone.gender;
    return clone;
}

const addJusted = members.map(n => removeGenderOnAll(n));
console.log(members)
console.log(addJusted)
