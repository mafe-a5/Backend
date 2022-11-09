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
        {id:1, name: '78532672'}
        {id:2, name: '78328743'}
        {id:3, name: '78238742'}
        {id:4, name: '78298498'}
    ]},
    { id: 2, name: 'Nombre',
    programs: [
        {id:5, name: 'Psicologia'}
        {id:6, name: 'Psicologia'}
        {id:7, name: 'Psicologia'}
    ]},
    { id: 3, name: 'País de origen',
    programs: [
        {id:8, name: 'Alemania'},
        {id:9, name: 'Rusia'},
        {id:10, name: 'Arquitectura'},
    ]
    }
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