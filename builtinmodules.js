// const amount= 12;
// if(amount<10){
//     console.log('small number');
// }else{
//     console.log('larger number')
// }

// console.log('hey its my first node app!!!')
// console.log(__dirname);
// setInterval(() =>{
//     console.log('hello world')
// },1000)

//CommonJs,every file is module
//Modules-Encapsulated Code(only share minimum)
const names = require('./module1')
const sayHi = require('./module2')
// console.log(names)
const  data = require('./6-alternative-flav')
// console.log(data);
require('./module3')
sayHi('susan')
sayHi(names.peter)
sayHi(names.john)
