const mysql = require('mysql2');
const db = mysql.createConnection({
 host: 'localhost',
 user: 'W3_86826_JATIN',
 password: 'manager', 
 database: 'Assignment-Project'
});
db.connect((err) => {
 if (err) {
 console.error('Database connection failed:', err.stack);
 return;
 }
 console.log('Connected to database');
});
module.exports = db;