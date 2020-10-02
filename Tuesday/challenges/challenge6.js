
var members = [
    { name: "Peter", age: 14, gender: "male" },
    { name: "Jan", age: 35, gender: "male" },
    { name: "Janne", age: 25, gender: "female" },
    { name: "Martin", age: 22, gender: "male" }]

let peter = { name: "Peter", age: 14, gender: "male" }

function addMayDriveProperty(member) {
    let clone = {...member};
    for (const [key, value] of Object.entries(member)) {
        if (key == "age" && value > 17) {
            clone.mayDrive = true;
        } else {
            clone.mayDrive = false;
        }
    }
    return clone;
}
const addJustedMember = addMayDriveProperty(peter)
console.log(addJustedMember)
console.log(peter)
