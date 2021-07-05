const fs = require('fs');

// İstenilen klasör içerisindeki dosyaları bulur. Callback functionu ile hata olmaması durumda gösterir.
const files = fs.readdir('./', function(error, data){
    
    if(error){
        console.log(error);
    }
    else{
        console.log("Ortamda Bulunan Dosyalar: "+data);
    }
    
});
// İstenilen dosyayı okur. Callback functionu ile hata olmaması durumda gösterir.
const data = fs.readFile('index.html', 'utf8', function(error, data){
    if(error){
        console.log(error);
    }
    else{
        console.log("Html İçeriği: " + data);
    }
});


//Dosya oluşturma ve içine yazma. Dosya zaten varsa eski dosyayı siler yenisini oluşturur. Callback functionu ile hata olmaması durumda çalışır.
fs.writeFile('writeDeneme.txt', 'Hello World...', function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Dosya oluşturuldu.")
    }
});

//Dosya oluşturma ve içine yazma. Dosya zaten varsa istenen metin, var olan metnin sonuna eklenir. Callback functionu ile hata olmaması durumda çalışır.
fs.appendFile('appendDeneme.txt', 'Hello World', function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Dosya oluşturuldu.")
    }
});

//Dosya silme işlemi. Dosya yok ise sorun olmaz. Callback functionu ile hata olmaması durumda çalışır.
fs.unlink('deneme1.txt', function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Dosya silindi!")
    }
});

fs.writeFile('deneme.txt', 'Hello World...', function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Dosya oluşturuldu.")
    }
});

fs.rename('deneme.txt', 'deneme1.txt', function(error){
    console.log('Dosya ismi değiştirildi.');
});