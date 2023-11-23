// dot notation
const person = {
    name: 'john',
};
console.log(person.name);

person.age = 25;
console.log(person);


//square bracket notation
const items = {
    'featured-item': ['item1', 'item2']
}
console.log(items["featured-item"])
console.log(person['name'])


let appState = 'loading';
const app = {
    [appState]: true
}
console.log(app)


appState = 'error';
const keyName = 'computer';
const app1 = {
    [appState]: true,
}
app1[keyName] = 'apple'
console.log(app1)


const state = {
    loading: true,
    name: '',
    job: ''
}
function updateState(key, value){
    state[key] = value
}
updateState('name', 'job');
console.log(state)