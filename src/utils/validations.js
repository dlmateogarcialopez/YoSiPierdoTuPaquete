const { check } = require('express-validator')


const validation_account = [
    check('cuenta')
        .isNumeric()
        .withMessage("The account must be numeric")
        .isLength({ min: 9, max: 9 })
        .withMessage("The account must has nine digits")
]


const validation_user_name = [
    check('nombre_usuario')
        .isString()
        .withMessage("The name must be string")
        .notEmpty()
        .withMessage("The name is required"),
    check('codigo')
        .isString()
        .withMessage("The code must be string")
        .notEmpty()
        .withMessage("The code is required")
]

const validation_description = [
    check('descripcion_evento')
        .isString()
        .withMessage("The description must be string")
        .notEmpty()
        .withMessage("The description is required"),
    check('codigo')
        .isString()
        .withMessage("The code must be string")
        .notEmpty()
        .withMessage("The code is required")
]

const validation_phone = [
    check('celular_radicado')
        .isNumeric()
        .withMessage("The cell phone must be numeric")
        .notEmpty()
        .withMessage("The cell phone is required")
        .isLength({ min: 10, max: 10 })
        .withMessage("The cell phone must contain ten digits"),
    check('codigo')
        .isString()
        .withMessage("The code must be string")
        .notEmpty()
        .withMessage("The code is required")
]

const validation_report = [
    check('codigo')
        .isString()
        .withMessage("The code must be string")
        .notEmpty()
        .withMessage("The code is required"),
    check('cuenta')
        .isNumeric()
        .withMessage("The account must be numeric")
        .isLength({ min: 9, max: 9 })
        .withMessage("The account must has nine digits"),
    check('nombre_usuario')
        .isString()
        .withMessage("The name must be string")
        .notEmpty()
        .withMessage("The name is required"),
    check('descripcion_evento')
        .isString()
        .withMessage("The description must be string")
        .notEmpty()
        .withMessage("The description is required"),
    check('celular_radicado')
        .isNumeric()
        .withMessage("The cell phone must be numeric")
        .notEmpty()
        .withMessage("The cell phone is required")
        .isLength({ min: 10, max: 10 })
        .withMessage("The cell phone must contain ten digits")
]

const validation_cell_phone = [
    check('celular')
        .isNumeric()
        .withMessage("The cell phone must be numeric")
        .notEmpty()
        .withMessage("The cell phone is required")
        .isLength({ min: 1, max: 10 })
        .withMessage("The cell phone must contain ten digits")
]

const validation_niu_address = [
    check('codigo')
        .isString()
        .withMessage("The code must be string")
        .notEmpty()
        .withMessage("The code is required"),
    check('cuenta')
        .isNumeric()
        .withMessage("The account must be numeric")
        .isLength({ min: 9, max: 9 })
        .withMessage("The account must has nine digits")
]

const validar_ingreso = [
    check('correo')
        .isString()
        .withMessage("El parametro debe ser string")
        .notEmpty()
        .withMessage("El parametro es requerido"),
    check('contrasena')
        .notEmpty()
        .withMessage("El parametro es requerido"),
]

const validar_registro = [
    check('correo')
        .isString()
        .withMessage("El parametro debe ser string")
        .notEmpty()
        .withMessage("El parametro es requerido"),
    check('contrasena')
        .notEmpty()
        .withMessage("El parametro es requerido"),
    check('nombre')
        .isString()
        .withMessage("El parametro debe ser string"),
    check('apellidos')
        .isString()
        .withMessage("El parametro debe ser string"),
    check('documento')
        .isNumeric()
        .withMessage("The document must be numeric")
        .notEmpty()
        .withMessage("The document phone is required"),
    check('telefono')
        .isNumeric()
        .withMessage("El teléfono debe ser númerico")
        .notEmpty()
        .withMessage("El teléfono es obligatorio")
        .isLength({ min: 1, max: 10 })
        .withMessage("El teléfono debe estar entre los 10 digitos"),

]

module.exports = {
    validation_account,
    validation_user_name,
    validation_description,
    validation_phone,
    validation_report,
    validation_cell_phone,
    validation_niu_address,
    validar_ingreso,
    validar_registro
}