import {Router} from 'express'

import {getAvion,createAvion,updateAvion,deleteAvion} from '../controllers/avion.controllers.js'


const router = Router()

//Router de avion
router.get('/avion',getAvion)
router.post('/avion',createAvion)
router.put('/avion',updateAvion)
router.delete('/avion',deleteAvion)

export default router