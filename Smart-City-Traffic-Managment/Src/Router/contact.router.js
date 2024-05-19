const { Router } = require('express');
const {
    createUser,
    listUsers,
    viewUser,
    updateUser,
    deleteUser,
    contactUser,
    listUserMessages
} = require("../Controllers/contact.controller");

const router = Router();

router.post('/users', createUser);
router.get('/users', listUsers);
router.get('/users/:id', viewUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Mesaj ekleme ve listeleme rotaları
router.post('/users/:id/contact', contactUser);
router.get('/users/:id/messages', listUserMessages);

module.exports = router;
