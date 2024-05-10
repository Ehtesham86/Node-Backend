const db = require('../DBConfig/dbConfig');

// Get all subcategories
exports.getAllSubcategories = (req, res) => {
  db.query('SELECT * FROM Subcategories', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Create a new subcategory
exports.createSubcategory = (req, res) => {
  const { name, categoryId } = req.body;
  db.query('INSERT INTO Subcategories (name, category_id) VALUES (?, ?)', [name, categoryId], (err, result) => {
    if (err) throw err;
    res.status(201).send('Subcategory created successfully');
  });
};

// Update a subcategory by ID
exports.updateSubcategory = (req, res) => {
  const subcategoryId = req.params.id;
  const { name, categoryId } = req.body;
  db.query('UPDATE Subcategories SET name = ?, category_id = ? WHERE id = ?', [name, categoryId, subcategoryId], (err, result) => {
    if (err) throw err;
    res.send('Subcategory updated successfully');
  });
};

// Delete a subcategory by ID
exports.deleteSubcategory = (req, res) => {
  const subcategoryId = req.params.id;
  db.query('DELETE FROM Subcategories WHERE id = ?', [subcategoryId], (err, result) => {
    if (err) throw err;
    res.send('Subcategory deleted successfully');
  });
};
