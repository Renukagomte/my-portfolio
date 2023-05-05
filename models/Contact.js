const mongoose = require("mongoose")

const contact = mongoose.Schema({
    name: {
      type:String,
    },
    email: {
        type: String,
    },
    website: {
        type: String,
    },
    desc: {
        type: String,
    }
   
}, { timestamps: true })

module.exports = mongoose.model("contact", contact)