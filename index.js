const express = require('express')

const dataService = require('./services/data.service')
const app = express()
 app.use(express.json())

app.get('/', (req, res) => {
    res.status(401).send("Get method")
})


app.put('/', (req, res) => {
    res.send("Put method")
})

app.patch('/', (req, res) => {
    res.send("Patch method")
})

app.delete('/', (req, res) => {
    res.send("Delete method")
})

app.post('/register', (req, res) => {
    console.log(req.body);
    const result= dataService.register(req.body.acno, req.body.uname, req.body.password)
    res.status(result.statusCode).json(result)
})

app.post('/signin', (req, res) => {
   
    const result= dataService.signin(req.body.acno, req.body.pswd)
    res.status(result.statusCode).json(result)
})

app.post('/deposit', (req, res) => {
   
    const result= dataService.deposit(req.body.acno, req.body.pswd, req.body.amount)
    res.status(result.statusCode).json(result)
})

app.post('/withdraw', (req, res) => {
   
    const result= dataService.withdraw(req.body.acno, req.body.pswd, req.body.amount)
    res.status(result.statusCode).json(result)
})

app.listen(3000, () => { console.log("Server started"); })
