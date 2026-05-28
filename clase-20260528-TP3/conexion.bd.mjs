// import pg from 'pg'
import {Pool} from 'pg'

const pool = new Pool({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    port: 5432,
    database:'tienda'
})

export default pool