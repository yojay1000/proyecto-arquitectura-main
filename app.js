//express
const express=require('express')
const app=express();
// const session= require('express-session');
var session = require('cookie-session');
//motor de vistas
app.set('view engine','ejs');
require('dotenv').config()
const port = process.env.PORT || 3000;
//session
app.use(session({
    secret:'yojay',
    resave:true,
    saveUninitialized:true
}))
//body para el post
app.use(express.urlencoded({extended:false}));
//app.use(express(JSON));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//rutas
app.use('/', require('./router/router'));
app.use('/', require('./router/usuarioRutas'));
app.use('/', require('./router/adminRutas'));
app.use('/', require('./router/mecanicoRutas'));
//archivos estaticos



//inicio del servidor
app.listen(port,()=>{
    console.log('conectado  al servidor '+port)
})

