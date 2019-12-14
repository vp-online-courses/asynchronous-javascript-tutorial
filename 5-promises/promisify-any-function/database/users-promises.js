var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'ecommerce_website'
});
connection.connect();

function getUsers() {
    return new Promise(function (resolve, reject) {
        connection.query('SELECT * FROM users', function (error, results, fields) {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

getUsers()
    .then(function (users) {
        console.log('List of users: ');
        users.forEach(function (user) {
            console.log(`${user.user_id}. ${user.firstname} ${user.lastname}`);
        });
    })
    .catch(function (error) {
        console.log(error);
    });

connection.end();