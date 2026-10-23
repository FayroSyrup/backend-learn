import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import 'dotenv/config'


const app = express()
const port = process.env.PORT || 5000;

// data convert to json
// middleware
app.use(cors())
app.use(express.json())

console.log('db user', process.env.DB_USER)
console.log('db pass', process.env.DB_PASS)

const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@bazar-dor.lfp3seg.mongodb.net/`);

export async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Successfully connected to MongoDB');
        return client;
    } catch (err) {
        console.dir(err);
    }
}

await connectToMongoDB();


app.get('/', (req, res)=> {
    res.send('Simple CRUD Server is running')
});

app.listen(port, ()=>{
    console.log(`Simple CRUD Server is running on port: ${port}`)
})