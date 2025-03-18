const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    nomes = ['Adrielle', 'Aigor', 'Angelo', 'Beatriz', 'Carlos Augusto', 'Daniel Gonçalves', 'Daniel Leaubon', 'Davi Jorge', 'Davi Trajano', 'Diego', 'Eduardo', 'Eliel', 'Evellin', 'Hugo', 'Isabelly', 'João Pedro', 'Jonathan', 'Júlia', 'Kauan', 'Maria Eduarda', 'Nathaly', 'Rafhael', 'Sabrina', 'Thales', 'Cesar', 'Cesinha', 'Geleia']
    i = getRandomInt(0, nomes.length-1)
    response.send('Olá, você é '+nomes[i]+'?')
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.listen(port)
