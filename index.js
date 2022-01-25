const express = require ('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const server = express();

server.use(express.json());

const categorias = ['Contratos de projetos', 'Qualificação econômico financeira' , 'Qualificação jurídica' ];
//one
server.get('/categorias/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});
//all
server.get('/categorias', (req, res) => {
    return res.json(categorias);
})
//new
server.post('/categorias', (req, res) => {
    const { name } = req.body;
    categorias.push(name);

    return res.json(categorias);
})


server.listen(3000);