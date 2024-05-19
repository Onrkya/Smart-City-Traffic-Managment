const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


UserSchema.pre('save', async function (next) {
    try {
        // Kullanıcı şeması içindeki parola alanı değişmemişse veya yeni bir kullanıcı ekleniyorsa...
        if (!this.isModified('password')) return next();

       
        const hashedPassword = await bcrypt.hash(this.password, 10);

        
        this.password = hashedPassword;

      
        next();
    } catch (error) {
        return next(error);
    }
});

module.exports = mongoose.model('User', UserSchema);
