import { createPool } from 'mysql2';
createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'test'
})