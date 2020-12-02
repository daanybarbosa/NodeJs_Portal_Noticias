var app = require('./config/server');

//recebera as requisicoes na porta 3000
app.listen(3000, function () {
    console.log('Servidor ON: localhost:3000');
}); 
