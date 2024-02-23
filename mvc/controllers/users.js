const { usersModel } = require('../models')

const getUsers = async (req, res) => {
    const data = await usersModel.find({})
    res.send(data)
}

const createUser = async (req, res) =>{
    const { body } = req
    const data = await usersModel.create(body)
    res.send(data)

}
const getUser = async (req, res) => {
    try {
        
        const { id } = req.params;
        const user = await usersModel.findById(id);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.send(user);
    } catch (error) {
        
        res.status(500).send({ message: error.message });
    }
};









module.exports = {
    getUsers, getUser, createUser
};