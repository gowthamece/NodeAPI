var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'Gowtham@123',
        server: 'NICDM052',
        database: 'TESTDB'
    });

    return conn;
};

module.exports = connect;