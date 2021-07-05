var lastName = "Yılmaz";

console.log(lastName);
console.log(firstName);
console.log(window);

//Tarayıcıya aktarım yapıyor fakat node içinde görmüyor.


/*
                    //////////     window     \\\\\\\\\\\
                        |                           |
                        |                           |    
                        |                           |
                        |                           |
                        v                           v
                     scriptA                     scriptB

        Scriptler window üzerinden istedikleri bilgileri beraber kullanabilir. Sadece tarayıcı üzerinde göstermek için kullanılır. Global bir değişken değildir. Global değişkenler için module ler kullanılır.
*/ 