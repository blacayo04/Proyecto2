import {pool} from "../db.js"


//Tabla usuarios
export const getUsuario = async (req,res) =>{
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE idUsuario = ?',[req.params.id])
    
    if (rows >= 0) return res.status (404).json({
        message: 'Usuario no encontrado'
    })
    res.json(rows[0])
}

export const getUsuarios = async (req,res) => {
    const [rows] = await pool.query ('SELECT * FROM usuarios')
    res.json(rows)
}


export const createUsuarios = async (req,res) => {
    const {idUsuario,nombreUsuario,telefono,correo} = req.body
    const [rows] = await pool.query('INSERT INTO usuarios(idUsuario,nombreUsuario,telefono,correo) VALUES (?,?,?,?)',[idUsuario,nombreUsuario,telefono,correo])
    res.send({
        id:idUsuario,
        nombreUsuario,
        telefono,
        correo
    })
}

export const deleteUsuarios = async (req,res) => {
    const [result] = await pool.query('DELETE FROM usuarios WHERE idUsuario = ?',[req.params.id])

    if(result.affectedRows <=0 ) return res.status (404).json({
        message: 'Usuario no encontrado'
    })

    res.sendStatus(204)
}


export const updateUsuarios = async (req,res) => {
    const {id} = req.params
    const {nombreUsuario,telefono,correo} = req.body
    const [result] = await pool.query('UPDATE usuarios SET nombreUsuario = ?, telefono = ?, correo = ? WHERE idUsuario = ?',[nombreUsuario,telefono,correo,id])
    console.log(result)

    if (result.affectedRows ===0) return res.status(404).json({
        message:'Usuario no encontrado'
    })    

    const [rows] = await pool.query('SELECT * FROM usuarios WHERE idUsuario = ?',[id])

    res.json(rows)
}



