const url = require('url');

const address =  "https://www.youtube.com/results?search_query=node.js";

let result = url.parse(address, true);

console.log(result);



// İstediğimiz url ye erişim sağlayıp, hakkında bilgi edinmek için kullandığımız module. Path in url hali.