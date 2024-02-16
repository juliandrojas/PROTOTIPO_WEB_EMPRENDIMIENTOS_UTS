import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import indexRoutes from './routes/index.routes.js';
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173', // Cambia esto según el origen de tu aplicación React
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  }));
  
//Routes
app.use('/api', indexRoutes);
//Not found route
app.use((req, res, next) => {
    res.status(404).json({message: 'Endpoint not found'});
});
app.listen(3000);
console.log("Server on port 3000");