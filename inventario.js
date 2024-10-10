const express = require('express');
const cors = require ('cors');
const app = express();
const fs = require('fs')
const path = require('path')
const inventarioRoutes = require('./Routes/inventarioRoutes')


const PORT = process.env.PORT || 3000;


app.use(cors());


app.use(express.json());

app.use('/api/inventario', inventarioRoutes);

app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
    
})