
const UserModel = require('../models/usermodel');
const {createFactory, getAllFactory, getByIdFactory, updateFactory,deleteFactory} = require('../utils/curdFactory');

const createUser = createFactory(UserModel);
const getAllUsers = getAllFactory(UserModel);
const getUserById = getByIdFactory(UserModel);
const updateUser = updateFactory(UserModel);
const deleteUser = deleteFactory(UserModel);

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}