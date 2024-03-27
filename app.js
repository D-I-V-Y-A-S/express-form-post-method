const express = require('express')
const app = express()
const PORT = 3500

app.set('view engine', 'ejs')

const router = require('./router/userRouter')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users', router)

app.get('/', (request, response) => {
    response.status(200).send({ message: "Hello!" })
})

app.listen(PORT, console.log(`server started running at http://localhost:${PORT}`))