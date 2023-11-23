const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer',
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer',
    },
    {
        name: 'susy',
        age: 30,
        position: 'the boss',
    },
];

//To access Array elements(prefered method)
const getAge = people.map((people)=> people.age)
console.log(getAge) 


//Alternative method(not prefered)
const getAges = (people) => people.age;
const age = people.map(getAges) 
console.log(getAge) 


const newPeople = people.map((people)=>{
    return ({
        firstName: people.name.toUpperCase(),
        oldAge: people.age + 20
    })
})
console.log(newPeople)


const names = people.map((people) => `<h2>${people.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join('');