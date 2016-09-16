var migrations = require('./command/books');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(__dirname + '/sqlite3/database.sqlite');

db.serialize(function() {
	db.run(migrations.migrate_books.create_table);
	console.log('Excuted: '+migrations.migrate_books.create_table)
});

db.close();
