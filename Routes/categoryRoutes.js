const express = require('express');
const router = express.Router();
const categoryController = require('../Controller/categoryController');
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

// Routes
router.get('/categories', categoryController.getAllCategories);
router.post('/categories', upload.single('image'), categoryController.createCategory);
router.put('/categories/:id', upload.single('image'), categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;
