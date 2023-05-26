const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({

    productName:{
        type: String,
        required:true
    },

    productCode:{
        type: String,
        required:true
    }
    ,
    quantity:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
}
)

const Inventory = mongoose.model("Inventory",inventorySchema)

module.exports = Inventory 