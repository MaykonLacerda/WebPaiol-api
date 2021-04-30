const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json())

const workers = []
const taskTipes = ["Cortador", "Rasgador", "Prensador", "Tirador", "Aparador", "Empacotador", "Gerente"]
const taskValues = [1.8, 9, 10, 1, 0.4, 0.3, 80]
const salary = []

app.get('/', (req, res) => {
    return res.send('Web Paiol')
})

app.post('/worker', (req, res) => {
    const { name, phone, office } = req.body

    const workerExists = workers.find( worker => worker.name === name)

    if(workerExists) {
        return res.status(404).json({ message: "Worker name already exists" })
    }

    const worker = {
        id: "1",
        name,
        phone,
        office: taskTipes[office],
        produce: [],
        salary: []
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
    const { amount, task } = req.body
    const { id } = req.params

    const worker = workers.find(worker => worker.id === id)

    if(!worker) {
        return res.status(404).json( { message: "Worker not found" } )
    }

    const sumIncome = (amount, value) => {
        if(taskTipes[task]) {
            value = taskValues[task]
        }

        return amount * value;
    }

    const sumSalary = (total) => {

        for (var i = 0; i < worker.produce.length; i++) {
            total += sumIncome(amount)
        }

        return total
    }
    
    worker.produce.push({
        amount, 
        task: taskTipes[task],
        income_at_day: sumIncome(amount),
        day: new Date(),
        salary: sumSalary(parseFloat(amount))
    })


    return res.status(200).json(workers)

})

app.get('/worker/salary/:id', (req, res) => {
    const { id } = req.params

    const worker = workers.find(worker => worker.id === id)

    const sizeProduce = worker.produce.length -1

    if(sizeProduce < 0) {
        return res.status(404).json({message: "Error"})
    }

    return res.json( { result: worker.produce[sizeProduce].salary } )

})

app.listen(3333, () => console.log("Server is running!"))