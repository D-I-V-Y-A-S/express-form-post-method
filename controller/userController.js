const userData = [
    {
        "id": "1",
        "name": "abc",
        "regno": "043",
        "age": "19"
    },
    {
        "id": "2",
        "name": "def",
        "regno": "044",
        "age": "19"
    }
]

const getAllUsers = (request, response) => {
    response.status(200).send(userData)
}

const getUserById = (request, response) => {
    const userId = request.params.id;
    userData.map((userID) => {
        if (userID.id === userId) {
            response.status(200).send(userID)
        }
        else {
            response.status(404).send(userId)
        }
    })
}
const addUserData = (request, response) => {
    response.status(200).render('index')
}

const receiveUserData = (request, response) => {
    const data = request.body;
    console.log(data)
    userData.push(data)
    response.status(200).redirect('/api/v1/users')
}

module.exports = { getAllUsers, getUserById, addUserData, receiveUserData }