import {Router} from 'express'


import {getAgencia,createAgencia,updateAgencia,deleteAgencia} from '../controllers/agencia.controllers.js'


const router = Router()


//Router tabla agencia
router.get('/agencia',getAgencia)
router.post('/agencia',createAgencia)
router.put('/agencia',updateAgencia)
router.delete('/agencia',deleteAgencia)

export default router