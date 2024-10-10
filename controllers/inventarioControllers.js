const getAllProducts = (req, res) => {
};

const addProduct = (req, res ) => {
    const {nombre, precio, descripcion, cantidad} = req.body;

const newProduct = {
    id: products.length +1,
    nombre, 
    precio,
    descripcion,
    cantidad

};

products.push(newProduct);
res.status(201).json(newProduct);

};

module.exports = { getAllProducts, addProduct }; 
