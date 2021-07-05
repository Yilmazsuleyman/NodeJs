
const Logger = require('./logger');
const logger = new Logger();

//  Listener kayıt et
logger.on('connection', function(args){
    console.log('Bağlantı Kuruldu.', args);
});


//  Event i tetikle

logger.log('Süleyman giriş yaptı.');




//Talep üzerine işlem yapmanı sağlayan module. 

