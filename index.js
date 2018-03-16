const express = require('express')
const app = express()

let charlie = {
    info: {
        name: 'Charlie Jennings',
        email: 'dev@charlie.fyi'
    }
}

app.get('/', (req, res) => res.json('Welcome.'))
app.get('/charlie', (req, res) => res.send(charlie.info))
app.get('/press-button', (req, res) => res.json('Well it\'s been nice knowing you..'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
