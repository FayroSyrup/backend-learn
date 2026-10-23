import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';


const app = express()
const port = process.env.PORT || 5000;

// data convert to json
// middleware
app.use(cors())
app.use(express.json())

const client = new MongoClient("mongodb+srv://simpleCrudAdmin:n6QiFWIas522wjjc@bazar-dor.lfp3seg.mongodb.net/");

app.get('/', (req, res)=> {
    res.send('Simple CRUD Server is running')
});

app.listen(port, ()=>{
    console.log(`Simple CRUD Server is running on port: ${port}`)
})