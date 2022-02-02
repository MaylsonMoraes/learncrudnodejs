const express = require ('express');

const server = express();

server.use(express.json());
//to star node index.js

const categorias = ['Contratos de projetos', 'Qualificação econômico financeira' , 'Qualificação jurídica' ];
//one
server.get('/categorias/:index', (req, res) => {
    const { index } = req.params;

    return res.json(categorias[index]);
    
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
});
//update
server.put('/categorias/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    categorias[index] = name;

    return res.json(categorias);
});
//delete
server.delete('/categorias/:index', (req, res) => {
    const { index } = req.params;

    categorias.splice(index, 1);
    return res.json({ message: "A categoria foi deletada"});
});


server.listen(3000);