const { Console } = require('console')
const express = require('express')
const app = express()
const bodyParser= require('body-parser')

// export dari satu folder



app.use(bodyParser.json({
    extend: true,
    limit: '20mb'
}))
app.use(bodyParser.urlencoded({
    extend: true,
    limit: '20mb'
}))
app.get('/', (req, res)=>{
    res.send('Hello World 1!')
})
app.get('/profile/:username/:id', (req, res)=>{
    console.log(req.params)
    res.send('username = '+ req.params.username)
})
// reg params
app.get('/daerah/:namadaerah', (req, res)=>{
    console.log(req.params)
    res.send('daerah anda = '+ req.params.namadaerah)
})
// reg body
app.post('/register', (req, res)=> {
    console.log(req.body)
    // res.json(req.body)
})
app.listen(3000, () => {
    console.log('server started')
})