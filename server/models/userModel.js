const mongoose =  require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    }
})

module.exports.User = mongoose.model('User', UserSchema);