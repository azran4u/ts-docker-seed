import { config } from './config';
import express from 'express';

// Constants
const PORT = +process.env.PORT | 3000;
const PG_HOST = process.env.PG_HOST;
const PG_PORT = process.env.PG_PORT;
const PG_USER = process.env.PG_USER;
const PG_PASS = process.env.PG_PASS;

console.log(`PG_HOST=${PG_HOST}`);
console.log(`PG_PORT=${PG_PORT}`);
console.log(`PG_USER=${PG_USER}`);
console.log(`PG_PASS=${PG_PASS}`);

let counter = 0;

// App
const app = express();
app.get('/', (req, res) => {
    const out = `request number = ${++counter}`;
    res.send(out);
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);


