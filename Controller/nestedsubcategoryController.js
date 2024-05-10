const db = require('../DBConfig/dbConfig');

// Get all nested subcategories
exports.getAllNestedSubcategories = (req, res) => {
  db.query('SELECT * FROM Nested_Subcategories', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Create a new nested subcategory
exports.createNestedSubcategory = (req, res) => {
  const { name, subcategoryId } = req.body;
  db.query('INSERT INTO Nested_Subcategories (name, subcategory_id) VALUES (?, ?)', [name, subcategoryId], (err, result) => {
    if (err) throw err;
    res.status(201).send('Nested subcategory created successfully');
  });
};

// Update a nested subcategory by ID
exports.updateNestedSubcategory = (req, res) => {
  const nestedSubcategoryId = req.params.id;
  const { name, subcategoryId } = req.body;
  db.query('UPDATE Nested_Subcategories SET name = ?, subcategory_id = ? WHERE id = ?', [name, subcategoryId, nestedSubcategoryId], (err, result) => {
    if (err) throw err;
    res.send('Nested subcategory updated successfully');
  });
};

// Delete a nested subcategory by ID
exports.deleteNestedSubcategory = (req, res) => {
  const nestedSubcategoryId = req.params.id;
  db.query('DELETE FROM Nested_Subcategories WHERE id = ?', [nestedSubcategoryId], (err, result) => {
    if (err) throw err;
    res.send('Nested subcategory deleted successfully');
  });
};
