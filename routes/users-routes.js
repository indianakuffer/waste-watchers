const { Router } = require('express')
const controllers = require("../controllers/users-controller")

const router = Router()

router.get('models/user', controllers.getUsers)
router.get('/model/user:id', controllers.getUser)
router.post('/model/user', controllers.createUser)
router.put('/model/user:id', controllers.updateUser)
router.delete('/model/user:id', controllers.deleteUser)

module.exports = router