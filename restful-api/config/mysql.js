var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pejuangkuda88!!',
  database: 'transevliz',
});

con.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log('Koneksi berhasil');
});

module.exports = con;
