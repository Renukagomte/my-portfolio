const Contact = require("./models/Contact");

exports.addContact = async (req, res) => {

    console.log(req.body)
    try {
        const result = await Contact.create(req.body)
         res.status(200).json({
            success: true,
            message: "Succesfully created",
            data: result
        })
    } catch (error) {
        console.log(error);
         res.status(400).json({
            error,
            success: false,
            message: "Failed to create, Try again",

        })
    }
}

exports.getContacts = async (req, res) => {
    try {
        const result = await Contact.find()
         res.status(200).json({
            success: true,
            message: "Succesfully find all contacts",
            result
        })
    } catch (error) {
        console.log(error)
         res.status(404).json({
            success: false,
            message: "not found",

        })
    }
}
exports.destroyContacts = async (req, res) => {
    try {
        const result = await Contact.deleteMany()
         res.status(200).json({
            success: true,
            message: "Succesfully delete contacts",
            data: result
        })
    } catch (error) {
        console.log(error)
         res.status(404).json({
            success: false,
            message: "not found",

        })
    }
}