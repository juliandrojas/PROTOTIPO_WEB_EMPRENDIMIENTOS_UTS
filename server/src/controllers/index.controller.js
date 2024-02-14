import { pool } from '../db.js';
export const crearEmprendimiento = async (req, res) => {
    try {
        //!Destructuramos el objeto req.body
        const { nombre, numero, creador, tipo } = req.body;
        const [rows] = await pool.query('INSERT INTO emprendimientos (nombre, numero, creador, tipo) VALUES (?, ?, ?, ?)', [nombre, numero, creador, tipo]);
        console.log({ rows });
        //!Devolvemos los datos junto con el ID
        res.send({
            id: rows.insertId,
            nombre,
            numero,
            creador,
            tipo
        });
    } catch (error) {
        return res.status(500).json({ error })
    }
};
export const obtenerEmprendimientos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM emprendimientos');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ error })
    }
}
//Para obtener un solo emprendimiento por su ID
export const obtenerEmprendimientoId = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM emprendimientos WHERE id = ?', [req.params.id]);
        //Si no se encuentra el emprendimiento
        rows.length <= 0 ? res.status(404).json({ message: 'Emprendimiento no encontrado' }) : res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ error })
    }
}
export const actualizarEmprendimiento = async (req, res) => {
    try {
        // TODO: Extraemos el id
        const { id } = req.params;
        // TODO: Extraemos lo que viene de req.body
        const { nombre, numero, creador, tipo } = req.body;
        console.log(id, nombre, numero, creador, tipo);
        const [result] = await pool.query('UPDATE emprendimientos SET nombre = IFNULL(?, nombre), numero = IFNULL(?, numero), creador = IFNULL(?, creador), tipo = IFNULL(?, tipo) WHERE id = ?', [nombre, numero, creador, tipo, id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Emprendimiento no encontrado' });
        } else {
            console.log(result);
        }
        const [rows] = await pool.query('SELECT * FROM emprendimientos WHERE id = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ error })
    }
}

export const getEmployees = (req, res) => {
    res.send("Obteniendo empleados");
}
export const createEmployees = (req, res) => {
    res.send("Creando empleados");
}
export const updateEmployees = (req, res) => {
    res.send("Actualizando empleados");
}