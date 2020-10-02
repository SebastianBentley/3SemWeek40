var members = [
    { name: "Peter", age: 14, gender: "male" },
    { name: "Jan", age: 35, gender: "male" },
    { name: "Janne", age: 25, gender: "female" },
    { name: "Martin", age: 22, gender: "male" }]



function addMayDrivePropertyToAll(member) {
    let clone = { ...member }
    if (clone.age < 17) {
        clone.mayDrive = false;
    } else {
        clone.mayDrive = true;
    }
    return clone;
}

const addJusted = members.map(n => addMayDrivePropertyToAll(n));
console.log(members)
console.log(addJusted)
