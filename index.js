// NodeJS API - LOGIN 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/login', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

// Array com os usuários liberados para fazer login...
    let users = ['adm01', 'adm02', 'adm03'];

    console.log('LOGIN');

    console.log('Usuário: ' + username);
    console.log('Senha: ' + password);

    if (users.includes(username)) {
        if (password == '159753') {
            console.log(`Seja bem-vindo ${username}!`);
        } else {
            console.log('Senha incorreta!');
        }
    } else {
        console.log('Usuário não existe!');
    }
})

app.listen(3000);
