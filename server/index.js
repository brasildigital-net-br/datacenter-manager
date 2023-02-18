const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qqueijo132',
    database: 'brd1',
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3001, ()=> {
    console.log('Server is running on port 3001');

});