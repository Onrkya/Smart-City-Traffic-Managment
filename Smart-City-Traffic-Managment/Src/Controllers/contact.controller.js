const User = require('../models/contact.model');

// Kullanıcı oluşturma
exports.createUser = async (req, res) => {
    const { firstName, middleName, lastName, phoneNumber, email, password } = req.body;
    try {
        const newUser = new User({ firstName, middleName, lastName, phoneNumber, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

// Kullanıcıları listeleme
exports.listUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error listing users', error });
    }
};

// Tek kullanıcıyı görüntüleme
exports.viewUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error viewing user', error });
    }
};

// Kullanıcı güncelleme
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstName, middleName, lastName, phoneNumber, email, password } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            id,
            { firstName, middleName, lastName, phoneNumber, email, password },
            { new: true }
        );
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

// Kullanıcı silme
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

// Mesaj ekleme
exports.addUserMessage = async (req, res) => {
    const { id } = req.params;
    const { sender, content } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.messages.push({ sender, content });
        await user.save();

        res.status(201).json({ message: 'Message added successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error adding message', error });
    }
};

// Mesaj listeleme
exports.listUserMessages = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user.messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages', error });
    }
};
