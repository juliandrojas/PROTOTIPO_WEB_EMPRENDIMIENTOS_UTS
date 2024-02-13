import express from 'express';
const app = express();
//Routes
app.get('/employees', (req, res) => {
    res.send("Obteniendo empleados");
})
app.listen(3000);
console.log("Server on port 3000");