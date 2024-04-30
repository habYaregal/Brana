import express from 'express';
import pg from "pg";
import cors from 'cors';

const App= express();
const port=3000;

App.use(cors());

const db= new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Brana',
    password: 'betterthanmongo',
    port: '5432'
});

db.connect();

App.get("/",async(req,res)=>{
    const result= await db.query("SELECT * FROM posts WHERE id=1");
    res.json(result.rows[0]);

});

App.listen(port,()=>{
    console.log(`your app is running at port ${port}`);
});