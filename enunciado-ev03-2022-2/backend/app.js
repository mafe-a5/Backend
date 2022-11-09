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

const modeloData = [
    { id: 1, name: 'ID', 
    programs: [
        {id:1, name: '1'},
        {id:2, name: '2'},
        {id:3, name: '3'},
        {id:4, name: '4'},
        {id:5, name: '5'},
        {id:6, name: '6'},
        {id:7, name: '7'},
        {id:8, name: '8'}
    ]},
    { id: 2, name: 'Nombre',
    programs: [
        {id:1, name: 'Tiida'},
        {id:2, name: 'Sentra'},
        {id:3, name: 'Note'},
        {id:4, name: 'Camaro RS'},
        {id:5, name: 'Cruze'},
        {id:6, name: 'i3'},
        {id:7, name: 'i4'},
        {id:8, name: 'z4'}
    ]},
    { id: 3, name: 'Año',
    programs: [
        {id:1, name: '2022'},
        {id:2, name: '2022'},
        {id:3, name: '2020'},
        {id:4, name: '2015'},
        {id:5, name: '2022'},
        {id:6, name: '2021'},
        {id:7, name: '2021'},
        {id:8, name: '2022'}
    ]},
    { id: 4, name: 'Código de marca',
    programs: [
        {id:1, name: '1'},
        {id:2, name: '1'},
        {id:3, name: '1'},
        {id:4, name: '2'},
        {id:5, name: '2'},
        {id:6, name: '3'},
        {id:7, name: '3'},
        {id:8, name: '3'}
    ]},
    { id: 5, name: 'Nombre del país de origen',
    programs: [
        {id:1, name: 'Japón'},
        {id:2, name: 'Japón'},
        {id:3, name: 'Japón'},
        {id:4, name: 'Estados Unidos'},
        {id:5, name: 'Estados Unidos'},
        {id:6, name: 'Alemania'},
        {id:7, name: 'Alemania'},
        {id:8, name: 'Alemania'}
    ]}
]

app.get('/modelo', (req,res,next)=> {
    return res.json(modeloData);
})

app.get('/',(req, res, next)=> {
    return res.json({ response: 'OK'});
})

app.listen(3001,()=>{
    console.log('Servidor Iniciado.')
})