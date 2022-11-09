//import {express} from 'express'
var express = require("express");
var app = express();

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const marcaData = [
    { id: 1, name: 'Código', 
    programs: [
        {id:1, name: '1'},
        {id:2, name: '2'},
        {id:3, name: '3'}
    ]},
    { id: 2, name: 'Nombre',
    programs: [
        {id:4, name: 'Nissan'},
        {id:5, name: 'Chevrolet'},
        {id:6, name: 'BMW'}
    ]},
    { id: 3, name: 'País de origen',
    programs: [
        {id:7, name: 'Japón'},
        {id:8, name: 'Estados Unidos'},
        {id:9, name: 'Alemania'},
    ]}
]

app.get('/marca', (req,res,next)=> {
    return res.json(marcaData);
})

app.get('/',(req, res, next)=> {
    return res.json({ response: 'OK'});
})

app.listen(3001,()=>{
    console.log('Servidor Iniciado.')
})