const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const employeeModel = require('./models/employee')
const jwt = require('jsonwebtoken')
require('dotenv').config();



const app = express()
app.use(express.json())
app.use(cors())

// mongoose.connect('mongodb://127.0.0.1:27017/employee')

mongoose.connect(process.env.MONGO_CONNECTION_STRING + process.env.MONGO_EMPLOYEE_DB)

const secretKey = process.env.SECRET_KEY

app.post('/login', (req, res) => {
    const { email, password } = req.body
    employeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    const id = user.id
                    const token = jwt.sign({ id, email }, secretKey, { expiresIn: '1h' })
                    res.json(token)

                } else {
                    res.status(401).json('Email or password incorrect')
                }
            } else {
                res.status(401).json('Email or password incorrect')
            }
        })
})

app.post('/register', (req, res) => {
    const { firstName, lasName, email, password, role } = req.body
    employeeModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                employeeModel.create(req.body)
                    .then(() => {

                        employeeModel.findOne({ email: email })
                            .then(user => {
                                if (user) {
                                    const id = user.id
                                    const token = jwt.sign({ id, email }, secretKey, { expiresIn: '1h' })
                                    res.json(token)
                                } else {
                                    res.json('Email already exists')
                                }
                            })
                    })
                    .catch(err => res.status(500).json('Internal error'))
            } else {
                res.status(409).json('Email already exists')
            }
        })

})

app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await employeeModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        var userObj = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role
        }
        res.json(userObj);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error: error.message });
    }
});

app.get('/health', (req, res) => {
    res.sendStatus(200).send('OK')
})


app.listen(3001, () => {
    console.log('Server is running')
})