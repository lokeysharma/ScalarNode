
const ProductModel = require('../models/productmodel');
const {createFactory, getAllFactory, getByIdFactory, updateFactory,deleteFactory} = require('../utils/curdFactory');

// const createProduct = async (req, res) => {
//     try {
//         const user = await ProductModel.create(req.body);
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 user
//             }
//         });
//     }
//     catch (err) {
//         res.status(400).json({
//             status: 'fail',
//             message: err.message
//         });
//     }

// }

const createProduct = createFactory(ProductModel);
const getAllProducts = getAllFactory(ProductModel);
const getProductById = getByIdFactory(ProductModel);
const updateProduct = updateFactory(ProductModel);
const deleteProduct = deleteFactory(ProductModel);


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}