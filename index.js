/**
 * http://usejsdoc.org/
 */
var mysql = require("mysql");

var con = mysql.createConnection({
	host : "programacion-web-test.cejfwltsp021.sa-east-1.rds.amazonaws.com",
	user : "damanzano",
	password : "4TohsakaRin",
	database : "aplicacion_social"
});

con.connect(function(err) {
	if (err) {
		console.log('Error connecting to Db');
		return;
	}
	console.log('Connection established');
});



// Consultas
con.query('SELECT * FROM usuarios', function(err, rows) {
	if (err) {
		console.log(err);
		throw err;
	} else {

		console.log('Data received from Db:\n');
		console.log(rows);
	}
	
});

con.query({
    sql: 'SELECT * FROM usuarios WHERE correo = ?',
    timeout: 40000, // 40s 
  },
  ['David'],
  function (error, results) {
    // error will be an Error if one occurred during the query 
    // results will contain the results of the query 
  }
);

// Insertar
var usuario = {
		nombre:'Nathalia',
		nickname:'nathi',
		pass:'2VierundZwanzig4',
		correo:'nathis0128@micorreo.com'
};
con.query('INSERT INTO usuarios SET ?', usuario, function(err, res) {
	if (err){
		console.log(err);
		throw err;
	}

	console.log('Execution results:', res);
});

con.end(function(err) {
	// The connection is terminated gracefully
	// Ensures all previously enqueued queries are still
	// before sending a COM_QUIT packet to the MySQL server.
});
