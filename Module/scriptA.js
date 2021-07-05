// var controllerA = (function(){
//     var firstName = "Süleyman";

//     var log = function(){
//         console.log(this.firstName);
//     }

//     return{
//         firstName,
//         log
//     }
// })();


// Yorum satırları açıklama
// Window üzerinden değişkenlerin birbiriyle çakışmasını engellemek için kullanılan yöntem. Değişkenlere functionlar üzerinden erişerek çakışmaların önüne geçiyoruz.


var age = 26;


var firstName = "Süleyman";

var log = function(name){
    console.log(name);
}

module.exports.name = firstName;
module.exports.log = log;


// module.exports = {
//     name: firstName,
//     log: log
// }

// module.exports={
//     firstName,
//     log
// }

// Module açıklama
// Js dosyalarında oluşturduğumuz değişkenleri module.exports kullanarak global hale getirebiliyor ve böylece her yerde kullanabiliyoruz.


