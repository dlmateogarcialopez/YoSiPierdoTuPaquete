const express = require('express')
const router = express.Router()
const ctrlRegistro = require('../controllers/registro.controller')
const validations = require('../utils/validations')
const passport = require('passport')


router.get('/registro', passport.authenticate('jwt', { session: false }), validations.validar_registro, ctrlRegistro.registro)

module.exports = router