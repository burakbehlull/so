const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const Post = require('./models/Post')


const app = express()
let arr = []

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({origin: true}))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/posts', (req,res)=>{

    res.json(arr)
})

app.get('/dashboard', (req,res)=>{
    res.render('dashboard',{
        posts: arr
    })
})

app.post('/addPost', (req,res)=>{
    arr.push({
        text: req.body.text,
        date: req.body.date,
        url: req.body.url
    })

    res.redirect('/')
})

app.delete('deletePost', async (req,res)=>{
    try {
        await Post.findOneAndRemove(req.body)
        res.status(200).redirect('/')
    } catch(err){
        res.status(404).json({
            status: "fail",
            error: err
        })
    }
})

app.listen(80)