import {pool} from "../db.js"

//Tabla avion
export const getAvion = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM avion')
    res.json(rows)
}

export const createAvion = async (req,res) => {
    const {idAvion,idAgencia} = req.body
    const [rows] = await pool.query('INSERT INTO Avion(idAvion,idAgencia) VALUES (?,?)',[idAvion,idAgencia])
    res.send({rows})
}

export const updateAvion = (req,res) => res.send ("Actualizando avion")

export const deleteAvion = (req,res) => res.send ("Eliminando avion")