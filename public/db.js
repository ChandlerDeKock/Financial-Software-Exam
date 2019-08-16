
//import Client from 'pg'
import { Pool, Client } from 'pg';
const text = 'select * from items';

const client = new Client({
    user: 'postgres',
    host: '172.17.0.3',
    database: 'sneakers',
    password: 'mysecretpassword',
    port: 5432,
  })
  client.connect()

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
})
client.query(text, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    }
  })