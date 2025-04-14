
const createFactory = (model) => {

    return async (req, res) => {
        try {
            let item = await model.create(req.body);
            
            if (!item) {
                return res.status(400).json({ message: 'Failed to create item' });
            }

            res.status(201).json({
                status: 'success',
                data: {
                    item
                }
            });
        }
        catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err.message
            });
        }

    }
};

const getAllFactory = (model) => {
    return async (req, res) => {
        try {
            let items = await model.find();
            if (!items) {
                return res.status(400).json({ message: 'Failed to get the required data' });
            }
            res.status(200).json({
                status: 'success',
                results: items.length,
                data: {
                    items
                }
            });
            }
        catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err.message
            });
            }
    }
}


const getByIdFactory = (model) => {
    return async (req, res) => {
        try {
            const id = req.params.id;
            let item = await model.findById(id);
            if (!item) {
                return res.status(404).json({
                    status: 'fail',
                    message: 'data not found'
                });
            }
            res.status(200).json({
                status: 'success',
                data: {
                    item
                }
            });
        }
        catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err.message
            });
        }
    }
}

const updateFactory = (model) => {
    return async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            let item = await model.findByIdAndUpdate(id, data, {
                new: true,
                runValidators: true
            });
            if (!item) {
                return res.status(404).json({
                    status: 'fail',
                    message: 'data not found'
                });
            }
            res.status(200).json({
                status: 'success',
                data: {
                    item
                }
            });
        }
        catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err.message
            });
        }
    }
}

const deleteFactory = (model) => {
    return async (req, res) => {
        try {
            const id = req.params.id;
            await model.findByIdAndDelete(id);
            res.status(204).json({
                status: 'success',
                data: null
            });
        }
        catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err.message
            });
        }
    }
}

module.exports = {
    createFactory,
    getAllFactory,
    getByIdFactory,
    updateFactory,
    deleteFactory
}