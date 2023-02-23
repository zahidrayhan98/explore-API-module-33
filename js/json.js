const user = {id:1 , name:'rupo', job: 'bekar'};

const stringField = JSON.stringify(user);
const field = JSON.parse(stringField);

console.log(stringField);
console.log (field);