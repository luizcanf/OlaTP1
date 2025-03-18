const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    nomes = ['Abel', 'Analiz', 'Arthur', 'Arthur', 'Cassiano', 'Daniel', 'Davi', 'Davi', 'Edgar', 'Elisa', 'Eloá', 'Esmeralda', 'Giovana', 'Hadassa', 'Hillary', 'João Marcos', 'João Pedro', 'Juliana', 'Kamily', 'Kayky', 'Lailla', 'Leonardo', 'Lorenna', 'Pilar', 'Mariana', 'Matheus', 'Miguel', 'Matheus', 'Miguel', 'Pedro', 'Raiane', 'Raquel', 'Rhaniery', 'Cesar', 'Cesinha', 'Geleia']
    i = getRandomInt(0, nomes.length-1)
    response.send('Olá, você é '+nomes[i]+'?')
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.listen(port)
