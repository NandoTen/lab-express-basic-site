const express = require('express')

//const hbs = require('hbs')
const path = require('path')

const app = express()

app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => { 
    res.render('index')
})

app.get('/about', (req, res) => { 
    res.render('about')
})

app.get('/works', (req, res) => { 
    res.render('works')
})

app.get('/gallery', (req, res) => { 
    res.render('gallery')
})



app.listen(5005, ()=> console.log('On port 5005'))