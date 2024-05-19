const { Request, Response } = require('express');
const User = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = "your-secret-key";




exports.signUp = async (req, res) => {
    try {
        const { email, password, phoneNumber, lastName, firstName } = req.body;

        // Gerekli alanların kontrolü
        if (!email || !password || !phoneNumber || !lastName || !firstName) {
            return res.status(400).json({ error: 'Eksik bilgi. Lütfen tüm alanları doldurun.' });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'Kullanıcı zaten mevcut' });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ email, password: hashedPassword, phoneNumber, lastName, firstName });
        await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, secretKey, {
            expiresIn: "1h",
        });

        return res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Kullanıcı bulunamadı' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Parola Yanlış' });
        }

        const token = jwt.sign({ userId: user._id }, secretKey, {
            expiresIn: "1h",
        });

        return res.status(200).json({ message: 'Giriş başarılı' });
    } catch (error) {
        return res.status(500).json({ error: 'Sunucu hatası' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(401).json({ error: 'Kullanıcı bulunamadı' });
        }

        await User.findByIdAndDelete(req.params.id);

        return res.status(200).json({ message: 'Kullanıcı başarıyla silindi' });
    } catch (error) {
        return res.status(500).json({ error: 'Sunucu hatası' });
    }
};
