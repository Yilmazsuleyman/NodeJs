const path = require('path');

let result = path.resolve("app.js");
extName = path.extname("app.js");
parseFile = path.parse(__filename);

console.log(result);
console.log(extName);
console.log(parseFile.root);
console.log(parseFile.dir);
console.log(parseFile.base);
console.log(parseFile.name);




//Dosya yol işlemleri için kullanılan module. Dosyaların tam yollarını, uzantılarını , isimlerini vb. bir çok işlem.