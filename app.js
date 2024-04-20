const express=require('express')
const app=express()
const PORT=3500

app.set('view engine','ejs')

const route=require('./route/userRoute')
app.use(express.json()) //not needed if not posted except from url.
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/users',route)

app.get('/',(request,response)=>
{
    response.status(200).send({message:"Hello!!"})
})

app.listen(PORT,console.log(`server started running successfully at http://localhost:${PORT}`))