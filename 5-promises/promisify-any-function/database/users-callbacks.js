var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'ecommerce_website'
});
connection.connect();

function getUsers(callback) {
    connection.query('SELECT * FROM users', function (error, results, fields) {
        if (error) {
            callback(error);
        }
        callback(null, results);
    });
}

getUsers(function (error, users) {
    if (error) {
        console.log(error);
    }
    console.log('List of users: ');
    users.forEach(function (user) {
        console.log(`${user.user_id}. ${user.firstname} ${user.lastname}`);
    });
});