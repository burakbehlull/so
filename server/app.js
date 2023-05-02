const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({origin: true}))

app.get('/', (req, res) => {
    res.send('So Site')
})

app.get('/posts', (req,res)=>{
    const arr = [
        {
            text: 'Atatürk',
            date:'Sonsuz...',
            url: 'xd'
        },
        {
            text: 'Atilla Han',
            date: 'Sonsuz...',
            url: 'awq'
        },
        {
            text: 'xd',
            date: 'deneme',
            url: 'test'
        },
        {
            text: 'xd',
            date: 'deneme',
            url: 'test'
        }
    ]
    res.json(arr)
})

app.listen(80)