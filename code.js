/* CONECCION CON EL SERVIDOR DE EXPRESS */
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))

/* RUTAS */

const { Router } = require('express');
const router = Router();
const Apps = require('../model/Apps')

router.get('/', async(req, res) => {
    try {
        const appss = await Apps.find()
        res.send(appss)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/', async(req, res) => {
    try {
        let apps = new Apps({
            key:value
        })
        apps = await apps.save()
        res.send(apps)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const apps = await Apps.findById(req.params.id)
        res.send(apps)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.put('/:id', async(req, res) => {
    try {
        const apps = await Apps.findByIdAndUpdate(req.params.id, {
            key:value
        },{new: true})
        res.send(apps)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const apps = await Apps.findByIdAndDelete(req.params.id)
        res.send(apps)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router

/* CONECCION CON MONGODB DATA BASE */
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(response=>{
    console.log('MongoDB Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});

const mongoose = require('mongoose');

// Connect MongoDB at default port = 27017
mongoose.connect('mongodb://localhost:27017/DB Name', {
useNewUrlParser: true,
useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
