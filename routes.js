const express = require('express')
const { addContact, getContacts, destroyContacts } = require('./Controller')

const router = express.Router()

router
  .post('/add-contact', addContact)
  .get('/', getContacts)
  .delete('/destroy', destroyContacts)


  
module.exports = router