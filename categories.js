// routes/categories.js
const express = require('express');
const router = express.Router();
const db = require('../dbconnection');

// Obtener todas las categorías
router.get('/', (req, res) => {
    const sql = "SELECT * FROM category";
    db.query(sql, (err, rows) => {
        if (err) throw err;
        res.render('categories', { title: 'Categorías', categories: rows });
    });
});

// Crear una nueva categoría
router.post('/add', (req, res) => {
    const { name } = req.body;
    const sql = "INSERT INTO category (name) VALUES (?)";
    db.query(sql, [name], (err, result) => {
        if (err) throw err;
        res.redirect('/category');
    });
});

module.exports = router;
