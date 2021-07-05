// var controllerB = (function(){

//     //private
//     var firstName = "Yılmaz";

//     var log = function(){
//         console.log(this.firstName);
//     }

//     //public
//     return{
//         firstName,
//         log
//     }
// })();

// console.log(controllerA.firstName);
// console.log(controllerB.firstName);

const scriptA = require('./scriptA');

scriptA.log('Yılmaz');
console.log(scriptA.name);

