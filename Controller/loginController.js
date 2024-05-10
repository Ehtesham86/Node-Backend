const db = require('../DBConfig/dbConfig');
exports.login = (req, res) => {
    const { username, password } = req.body;

    // Query to fetch user from database based on username
    const query = 'SELECT * FROM users WHERE username = ?';

    db.query(query, [username], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }

        // Check if user exists
        if (results.length === 0) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        // Compare passwords
        const user = results[0];
        if (user.password === password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    });
};