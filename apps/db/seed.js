var books = require('./faker/books.json');
var migrations = require('./command/books');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(__dirname + '/sqlite3/database.sqlite');

db.serialize(function() {
	var stmt = db.prepare(migrations.migrate_books.insert);
	for(var data in books) {
		stmt.run(books[data].ISBN, books[data].title, books[data].author, books[data].publish_year, books[data].publisher, books[data].image_s, books[data].image_m, books[data].image_l);
		console.log(books[data].ISBN + ': ' + books[data].title);
	}
	stmt.finalize(); 
});

db.close();

