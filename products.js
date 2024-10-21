// routes/products.js
const express = require('express');
const router = express.Router();
const db = require('../dbconnection');

// Obtener todos los productos
router.get('/', (req, res) => {
    const sql = "SELECT product.*, category.name AS category_name FROM product INNER JOIN category ON product.category = category.idc";
    db.query(sql, (err, rows) => {
        if (err) throw err;
        res.render('products', { title: 'Productos', products: rows });
    });
});

// Crear un nuevo producto
router.post('/add', (req, res) => {
    const { name, price, category } = req.body;
    const sql = "INSERT INTO product (name, price, category) VALUES (?, ?, ?)";
    db.query(sql, [name, price, category], (err, result) => {
        if (err) throw err;
        res.redirect('/product');
    });
});

module.exports = router;
