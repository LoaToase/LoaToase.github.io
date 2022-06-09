const mongoose = require('mongoose')

module.exports = mongoose.model(
    'admin',
    new mongoose.Schema(
        {
            adminName:String,
            adminPass:String
        },
        {
            versionKey:false,
        }
    )
)