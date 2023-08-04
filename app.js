const express = require('express')
const app = express()
const port = 3000

const userRoutes = require('./routes/users')

require('./models/db')

app.use(express.json())

app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})

// app.get('/api/users', (req, res) => {
//     const users = [
//         { id: 1, name: 'Name One' },
//         { id: 2, name: 'Name Two' }
//     ]
//     res.json(users)
// })

