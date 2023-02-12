const express = require('express')
const app = express()

app.use(require('./registro.route'));
app.use(require('./ingreso.route'));

module.exports = app

