const express = require ('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
//to start node index.js

const categorias = ['Contratos de projetos', 'Qualificação econômico financeira' , 'Qualificação jurídica' ];
//imagem aleatoria
app.get('/categorias/:id', (req, res) => {
    const { id } = req.params;

    return res.json(categorias[id]);
    
});
//list all em ordem decrescente
app.get('/categorias', (req, res) => {
    return res.json(categorias);
})
//add new imagem com titulo e endereço
app.post('/categorias', (req, res) => {
    const { name } = req.body;
    categorias.push(name);

    return res.json(categorias);
});
//edit update
app.put('/categorias/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    categorias[id] = name;

    return res.json(categorias);
});
//delete
app.delete('/categorias/:id', (req, res) => {
    const { id } = req.params;

    categorias.splice(id, 1);
    return res.json({ message: "A categoria foi deletada"});
});

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});
app.listen(3000, () => {
    console.log('Server ON');
});