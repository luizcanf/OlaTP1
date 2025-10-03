const express = require('express')
const app = express()
app.use(express.json());
const port = process.env.PORT || 3000;

//let nomesPdC2024 = ['Abel', 'Analiz', 'Arthur', 'Arthur', 'Cassiano', 'Daniel', 'Davi', 'Davi', 'Edgar', 'Elisa', 'Eloá', 'Esmeralda', 'Giovana', 'Hadassa', 'Hillary', 'João Marcos', 'João Pedro', 'Juliana', 'Kamily', 'Kayky', 'Lailla', 'Leonardo', 'Lorenna', 'Pilar', 'Mariana', 'Matheus', 'Miguel', 'Matheus', 'Miguel', 'Pedro', 'Raiane', 'Raquel', 'Rhaniery', 'Cesar', 'Cesinha', 'Geleia']
let nomes = ['Abel', 'Analiz', 'Arthur', 'Cassiano', 'Daniel', 'Davi', 'Davi', 'Davi', 'Deyveson', 'Edgar', 'Elisa', 'Eloá', 'Esmeralda', 'Giovana', 'Hadassa', 'Hillary', 'João Marcos', 'João Mateus', 'João Pedro', 'João Victor', 'Juliana', 'Kayky', 'Lailla', 'Leonardo', 'Lorenna', 'Mariana', 'Matheus', 'Miguel', 'Matheus', 'Miguel', 'Paulo Arthur', 'Raquel', 'Rhaniery', 'Cesar', 'Geleia']

app.get('/', (request, response) => {
    i = getRandomInt(0, nomes.length-1)
    response.send('Olá, você é '+nomes[i]+'?')
})

app.get('/nomes', (request, response) => {
    response.send('Lista dos nomes: '+nomes)
})

app.post('/apresente-se', (request, response) => {
    let nome = request.body.nome
    
    if (nomes.includes(nome)) {
        response.send('Olá, '+nome+'! Seu nome já estava na lista.')
    } else {
        nomes.push(nome)
        response.send('Olá, '+nome+'! Acabei de incluir seu nome na lista.')
    }
})

app.post('/reset', (request, response) => {
    let total = request.body.total
    
    if (total == "verdadeiro") {
        nomes = ['Abel', 'Analiz', 'Arthur', 'Arthur', 'Cassiano', 'Daniel', 'Davi', 'Davi', 'Edgar', 'Elisa', 'Eloá', 'Esmeralda', 'Giovana', 'Hadassa', 'Hillary', 'João Marcos', 'João Pedro', 'Juliana', 'Kamily', 'Kayky', 'Lailla', 'Leonardo', 'Lorenna', 'Pilar', 'Mariana', 'Matheus', 'Miguel', 'Matheus', 'Miguel', 'Pedro', 'Raiane', 'Raquel', 'Rhaniery', 'Cesar', 'Cesinha', 'Geleia']
        response.send('Lista de nomes resetada para a lista inicial.')
    } else {
        let nome = request.body.nome
        const index = nomes.indexOf(nome)
        if (index > -1) {
            nomes.splice(index, 1)
            response.send('Nome "'+nome+'" removido da lista.')
        } else {
            response.send('Nome "'+nome+'" não encontrado na lista.')
        }
    }
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.listen(port)
