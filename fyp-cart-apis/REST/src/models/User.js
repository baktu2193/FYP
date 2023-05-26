const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required:true,
        select: true
    },
    displayName: {
        type: String,
        required:true
    },
    cart:[Object], // deprecated
    cartConnection:Boolean,
    totalBill:{
        type: Number
    },
    adminPrevilages:{
        type:Boolean
    },
    token:{
        type:String
    }

},
{
    timestamps:true
}
)

const User = mongoose.model('User', userSchema)

module.exports = User