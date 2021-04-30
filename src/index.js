const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json())

const workers = []
const taskTipes = ["Cortador", "Rasgador", "Prensador", "Tirador", "Aparador", "Empacatador", "Gerente"]

app.get('/', (req, res) => {
    return res.send('Web Paiol')
})

app.post('/worker', (req, res) => {
    const { name, phone, task } = req.body

    const workerExists = workers.find( worker => worker.name === name)

    if(workerExists) {
        return res.status(404).json({ message: "Worker name already exists" })
    }

    const worker = {
        id: uuidv4(),
        name,
        phone,
        task: taskTipes[task],
        produce: []
    }

    workers.push(worker)

    req.worker = worker

    return res.status(200).json(workers)
})

app.put('/worker/:id', (req, res) => {
    const { name } = req.body
    const { id } = req.params

    const worker = workers.find(worker => worker.id === id)

    if(!worker) {
        return res.status(404).json( { message: "Worker not found" } )
    }

    worker.name = name;

    return res.json(workers)
})

app.post('/worker/produce/:id', (req, res) => {
    const { amount } = req.body
    const { id } = req.params

    const worker = workers.find(worker => worker.id === id)

    if(!worker) {
        return res.status(404).json( { message: "Worker not found" } )
    }

    const soma = (amount, value) => {
        if(taskTipes[0]) {
            value = 1.8
        }

        return amount * value;
    }


    worker.produce.push({
        amount, 
        salary: soma(amount),
        day: new Date()
    })

    return res.status(200).json(worker)

})

app.listen(3333, () => console.log("Server is running!"))