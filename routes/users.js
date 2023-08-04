const express = require('express')
const router = express.Router()
const User = require('../models/user')

//CREATE
router.post('/', (req, res) => {
    const { name, email, age } = req.body
    const newUser = new User({ name, email, age })

    newUser.save().then((user) => {
        res.json(user)
    }).catch((err) => {
        res.status(500).json({ error: 'Error creating user' })
    })
})

//READ
router.get('/', (req, res) => {
    User.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        res.status(500).json({ error: 'Error fetching users' })
    })
})

//UPDATE
router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name, email, age } = req.body
    
    User.findByIdAndUpdate(id, { name, email, age }, { new: true }).then((user) => {
        res.json(user)
    }).catch((err) => {
        res.status(500).json({ error: 'Error updating user' })
    })
})

//DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params

    User.findByIdAndUpdate(id).then(() => {
        res.json({ message: 'User deleted successfully' })
    }).catch((err) => {
        res.status(500).json({ error: 'Error deleting user' })
    })
})

module.exports = router