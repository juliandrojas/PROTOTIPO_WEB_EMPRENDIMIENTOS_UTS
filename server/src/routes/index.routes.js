import { Router } from 'express';
import { actualizarEmprendimiento, crearEmprendimiento, obtenerEmprendimientoId, obtenerEmprendimientos } from '../controllers/index.controller.js';
const router = Router();
/*app.get('/ping', async (req, res) => {
    const [ result ] = await pool.query("SELECT 'PONG' AS RESULT")
    res.json(result[0]);
})*/
router.get('/emprendimientos', obtenerEmprendimientos);
router.post('/emprendimientos/crear', crearEmprendimiento);
router.get('/emprendimientos/:id', obtenerEmprendimientoId);
router.patch('/emprendimientos/:id', actualizarEmprendimiento);
/*
router.post('/crear', crearEmprendimiento);
router.put('/employees', updateEmployees);*/
export default router;