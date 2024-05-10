const db = require('../DBConfig/dbConfig');
const multer = require('multer');
const path = require('path'); // Import the path module

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/'); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${path.basename(file.originalname)}`); // Unique filename
  },
});


const upload = multer({ storage: storage });

// Get all categories
exports.getAllCategories = (req, res) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Create a new category with image upload
exports.createCategory = (req, res) => {
  const { name } = req.body;
  const imagePath = req.file ? req.file.path : null; // Get uploaded image path
  db.query(
    'INSERT INTO categories (name, image_path) VALUES (?, ?)',
    [name, imagePath],
    (err, result) => {
      if (err) throw err;
      res.status(201).send('Category created successfully');
    }
  );
};

// Update a category by ID with optional image upload
exports.updateCategory = (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;
  const imagePath = req.file ? req.file.path : null; // Get uploaded image path
  const updateValues = [name];
  if (imagePath) updateValues.push(imagePath);

  db.query(
    'UPDATE categories SET name = ?, image_path = ? WHERE id = ?',
    [...updateValues, categoryId],
    (err, result) => {
      if (err) throw err;
      res.send('Category updated successfully');
    }
  );
};

// Delete a category by ID
exports.deleteCategory = (req, res) => {
  const categoryId = req.params.id;
  db.query('DELETE FROM categories WHERE id = ?', [categoryId], (err, result) => {
    if (err) throw err;
    res.send('Category deleted successfully');
  });
};

module.exports = exports;
