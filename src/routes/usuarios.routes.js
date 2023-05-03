import {Router} from 'express'


import {getUsuario,getUsuarios,createUsuarios,updateUsuarios, deleteUsuarios} from '../controllers/usuario.controllers.js'


const router = Router()


//Router tabla usuarios
router.get('/usuarios/:id', getUsuario)

router.get('/usuarios',getUsuarios)
router.post('/usuarios',createUsuarios)

router.put('/usuarios/:id',updateUsuarios)
router.delete('/usuarios/:id',deleteUsuarios)


export default router
