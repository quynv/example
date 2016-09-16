exports.migrate_books = {
	create_table:   "CREATE TABLE IF NOT EXISTS books "+
					"(id	INTEGER PRIMARY KEY AUTOINCREMENT, "+
					" ISBN	TEXT	NOT NULL, "+
					" title	TEXT	NOT NULL, "+
					" author TEXT	NOT NULL, "+
					" publish_year	INTEGER, "+
					" publisher	TEXT,"+
					" image_s	TEXT,"+
					" image_m	TEXT,"+
					" image_l	TEXT"+
					")",
	insert: 		"INSERT INTO books"+
					"(ISBN, title, author, publish_year, publisher, image_s, image_m, image_l) "+
					"VALUES (?,?,?,?,?,?,?,?)", 
};