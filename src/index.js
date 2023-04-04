const express = require('express')
const { rootRouter } = require('./routes/rootRoute')
const app = express();
const port = 8080;

app.use(express.json())

app.listen(port, ()=> {
    console.log('listen port: ', port)
})

app.use('/api', rootRouter)