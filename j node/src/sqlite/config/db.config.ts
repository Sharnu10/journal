import sql from 'sqlite3'

const sqlite3 = sql.verbose();

// Connect to a database (in this example, a new file-based database)
export const db = new sqlite3.Database('journal-db.db', (err) => {
    if(err)  {
        console.log('db connect error:- ', err);
    } else {
        console.log('db connected');
    }
});

// Close the database connection
export const closeDb = () => db.close((err) => {
    if(err) {
        return console.error(err.message);
    }
    console.log('Database connection is closed.');
});