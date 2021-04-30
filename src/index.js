const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json())

const workers = []

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
        task,
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
    const { }
})

app.listen(3333, () => console.log("Server is running!"))