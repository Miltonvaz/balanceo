const express = require('express');
const app = express();
const port = 8088;

app.get('/', (req, res) => {
res.send(`Respuesta del Servidor ${req.hostname}:${port}`);
});
app.listen(port, () => {
console.log(`Servidor escuchando en puerto ${port}`);
});