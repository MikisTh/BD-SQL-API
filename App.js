const mysql = require('mysql');

const con = mysql.createConnection({
    host: '', // O host do banco. Ex: localhost
    user: '', // Um usuário do banco. Ex: user 
    password: '', // A senha do usuário. Ex: user123
    database: '' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

con.query('SELECT * FROM author', (err, rows) => {
    if (err) throw err

    console.log('Authors: ', rows, '\n\n')
})

con.query('SELECT * FROM book', (err, rows) => {
    if (err) throw err

    console.log('Books: ', rows, '\n\n')
})
con.query(
    'SELECT b.id, b.title, a.name, a.location FROM book as b INNER JOIN author as a ON b.author = a.id', 
    (err, rows) => {
    if (err) throw err

    rows.forEach(row => {
        console.log(`${row.title} by ${row.name}, ${row.location}`)
    });
})

const newBook = {title: 'Computer Networks', author: 2}

con.query(
    'INSERT INTO book SET ?', newBook, (err, res) => {
    if (err) throw err

    console.log(`New book added with ID: ${res.insertId}`)
})

con.query('UPDATE book SET title = ? WHERE ID = ?', 
    ['Redes de Computadores', 6],
    (err,ressult) => {
        if(err) throw err;

        console.log('Changed ', ressult)
    }
)

con.query(
    'DELETE FROM book WHERE id = ?', [6], (err, result) => {
        if (err) throw err;

        console.log(`Deleted ${result.affectedRows} row(s)`);
    }
);

con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})
