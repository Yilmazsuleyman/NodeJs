


(function (exports, require, module, _filename, _dirname) {

    console.log(__filename);
    console.log(__dirname);
    var firstName = "Süleyman";

    var log = function (name) {
        console.log(name);
    }


    exports = {
        firstName,
        log
    }
})();

//Her yapı aslında bu IIFE şekliyle tanımlı, default olarak var.
//__filename ile dosyanın tam yolunu 
//__dirname ile klasör yolunu bulabiliyoruz.






