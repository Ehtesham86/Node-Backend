// productController.js
const db = require('../DBConfig/dbConfig');

exports.createProduct = (req, res) => {
  const { name, description, price, image_url, discount, discount_price, category_id, subcategory_id, nested_subcategory_id } = req.body;
  const sql = 'INSERT INTO products (name, description, price, image_url, discount, discount_price, category_id, subcategory_id, nested_subcategory_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, description, price, image_url, discount, discount_price, category_id, subcategory_id, nested_subcategory_id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Product created successfully', productId: result.insertId });
    }
  });
};

exports.getAllProducts = (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.getProductById = (req, res) => {
  const productId = req.params.id;
  db.query('SELECT * FROM products WHERE id = ?', [productId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

exports.updateProductById = (req, res) => {
  const productId = req.params.id;
  const { name, description, price, image_url, discount, discount_price, category_id, subcategory_id, nested_subcategory_id } = req.body;
  const sql = 'UPDATE products SET name=?, description=?, price=?, image_url=?, discount=?, discount_price=?, category_id=?, subcategory_id=?, nested_subcategory_id=? WHERE id=?';
  db.query(sql, [name, description, price, image_url, discount, discount_price, category_id, subcategory_id, nested_subcategory_id, productId], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json({ message: 'Product updated successfully' });
    }
  });
};

exports.deleteProductById = (req, res) => {
  const productId = req.params.id;
  const sql = 'DELETE FROM products WHERE id=?';
  db.query(sql, [productId], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json({ message: 'Product deleted successfully' });
    }
  });
};

exports.getProductsByCategory = (req, res) => {
    const categoryId = req.params.categoryId;
    db.query('SELECT * FROM Products WHERE category_id = ?', [categoryId], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  exports.getProductsBySubcategory = (req, res) => {
    const subcategoryId = req.params.subcategoryId;
    db.query('SELECT * FROM Products WHERE subcategory_id = ?', [subcategoryId], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  exports.getProductsByNestedSubcategory = (req, res) => {
    const nestedSubcategoryId = req.params.nestedSubcategoryId;
    db.query('SELECT * FROM Products WHERE nested_subcategory_id = ?', [nestedSubcategoryId], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };