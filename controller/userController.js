const userData = [
    {
        "id": "1",
        "name": "abc",
        "regno": "043"
    },
    {
        "id": "2",
        "name": "def",
        "regno": "044"
    }
]

const getAllUserData=(request,response)=>
{
    response.status(200).send(userData)
}

const getUserDataById=(request,response)=>
{
    const userID=request.params.id;
    userData.map((userId)=>{
        if(userId.id===userID)
        {
            response.status(200).send(userId)
        }
        else{
            response.status(404).send(`${userID} not exists!`)
        }
    })
}

const renderForm=(request,response)=>
{
response.status(200).render('index')
}

const addUserData=(request,response)=>
{
    let data=request.body;
    console.log(data);
    userData.push(data)
    response.status(200).redirect('/api/v1/users')
}

module.exports={getAllUserData,getUserDataById,renderForm,addUserData}