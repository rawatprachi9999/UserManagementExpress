const express =require ("express")
const router = express.Router()
const verify_token =require ('middleware\verfication')
const {register , login , profile,transcation,wishlist} =require ("../controllers/userControllers")



router.post('/register', register)
router.get('/login', login)

router.get('/profile',verify_token,profile)
router.get('/transcation',verify_token, transcation)
router.get('/wishlist',verify_token, wishlist)



module.exports = router

