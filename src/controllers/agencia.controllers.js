import {pool} from "../db.js"


//Tabla agencia
export const getAgencia = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM agencia')
    res.json(rows)
}

export const createAgencia = async (req,res) => {
    const {idAgencia,nombreAgencia} = req.body
    const [rows] = await pool.query ('INSERT INTO agencia(idAgencia,nombreAgencia) VALUES (?,?)',[idAgencia,nombreAgencia])
    res.send({rows})
}

export const updateAgencia = (req,res) => res.send ("Actualizando agencia")

export const deleteAgencia = (req,res) => res.send("Eliminando agencia")