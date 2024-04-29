const array = [
    { id: 1, name: "Bilal", city: "Lahore" },
    { id: 1, name: "Bilal", city: "Lahore" },
    { id: 3, name: "Hafsa", city: "Karachi" },
    { id: 4, name: "Rehan", city: "Lahore" },
    { id: 5, name: "Saqib", city: "Karachi" },
    { id: 6, name: "Farhan", city: "Islamabad" }
]
const groupByObject = {};
for (let user of array) {
    let city = user.city;
    groupByObject.hasOwnProperty(city) ? null : groupByObject[city] = [];
    groupByObject[city].push(user)
}
console.log("Using for loop")
console.log(JSON.stringify(groupByObject));
function groupByObject1(array, key) {
    return (
        array.reduce((acc, user) => {
            let city = user[key];
            acc.hasOwnProperty(city) ? null : acc[city] = [];
            acc[city].push(user);
            return acc;
        }, {})
    )
}
console.log("Using Reduce Method ")
console.log(JSON.stringify(groupByObject1(array, 'city')));

