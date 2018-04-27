const pg = require('pg');
// "INSERT INTO users VALUES ('parent',{hourly_pay_rate: 10.00, schedule: {}, super_power_preferences_ids: [0001, 0002, 0003] }, social: {}, location {}, pid: {fname: 'jon', lname: 'harlan', phone: '2484449837', email: 'jharlan.dev@gmail.com'} ");













// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo-gigi-node-psql';

// const client = new pg.Client(connectionString);
// client.connect();

// const query = client.query(
//   'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
	
// query.on('end', () => { client.end(); });


// const { Client } = require('pg')
// const client = new Client()

// await client.connect()

// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()