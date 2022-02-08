const { Router } =  require('express')
const router = Router()

router.get('/', require('../controllers/home'))

router.get('/contact', require('../controllers/contact'))

router.get('/about', require('../controllers/about'))

module.exports = router
