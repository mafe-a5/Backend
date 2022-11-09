//import {express} from 'express'
import express, { response } from 'express'
import bodyParser from 'body-parser'
import {MarcasService, ModelosService} from './repositorio/index.js'


var app = express();

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/marcas/getAll', (req,res,next)=> {
    return res.json(MarcasService.getAll());
})

app.post('/marcas', (req,res,next)=> {
    console.log('received request')
    
    MarcasService.insert(req.body);
    return res.json();
})

app.get('/marcas/:id', (req,res,next) => {
    const result = MarcasService.findOne(req.params.id)
    return res.json(result)
})

app.get('/modelos/getAll', (req,res,next)=> {
    return res.json(ModelosService.getAll());
})

app.post('/modelos', (req,res,next)=> {
    console.log('received request')
    
    ModelosService.insert(req.body);
    return res.json();
})

app.get('/modelos/:id', (req,res,next) => {
    const result = ModelosService.findOne(req.params.id)
    return res.json(result)
})


app.listen(3333,()=>{
    console.log('Servidor Iniciado.')
})