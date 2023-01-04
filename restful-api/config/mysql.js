var mysql2 = require('mysql2')

var con = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Pejuangkuda88!!",
    database: "transevilzz"
})

con.connect(function(err){
    if(err) throw err;
    console.log("Koneksi berhasil")
})

// con.on('error', function(err) {
//   console.log("[mysql error]",err);
// });