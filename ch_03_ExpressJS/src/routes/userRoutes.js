const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    { id: 4, name: 'Alice Brown' },
    { id: 5, name: 'Charlie Davis' },
    { id: 6, name: 'Eve White' },
    { id: 7, name: 'Frank Black' },
    { id: 8, name: 'Grace Green' },
    { id: 9, name: 'Hank Yellow' },
    { id: 10, name: 'Ivy Blue' }
];

router.get('/', (req, res) => {
    try {
        console.log('GET request received for all users');
        res.status(200).json(users);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.get('/:id', (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10);
        const user = users.find(u => u.id === userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(`GET request received for user with ID ${userId}`);
        res.status(200).json(user);
    }
    catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/', (req, res) => {
    try {
        const newUser = {
            id: users.length + 1,
            name: req.body.name
        };

        if(newUser.name === undefined || newUser.name === null) {
            return res.status(400).json({ message: 'Name is required' });
        }
        users.push(newUser);
        console.log('POST request received to create a new user:', newUser);
        res.status(201).json(newUser);
    }
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal Server Errosr' });
    }
}
);

router.put('/:id', (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10);
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }
        const updatedUser = { ...users[userIndex], ...req.body };
        users[userIndex] = updatedUser;
        console.log(`PUT request received to update user with ID ${userId}:`, updatedUser);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.patch('/:id', (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10);
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }
        const updatedUser = { ...users[userIndex], ...req.body };
        users[userIndex] = updatedUser;
        console.log(`PATCH request received to update user with ID ${userId}:`, updatedUser);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10);
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }
        users.splice(userIndex, 1);
        console.log(`DELETE request received to delete user with ID ${userId}`);
        res.status(204).send(); // No content to send back
    }
    catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;