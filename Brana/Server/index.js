import express from 'express';
import pg from "pg";
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
const App= express();
const port=3000;
const saltRounds = 10;

App.use(bodyParser.json());
App.use(cors());
const db= new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Brana',
    password: 'betterthanmongo',
    port: '5432'
});

db.connect();

App.get("/",(req,res)=>{
    res.send("The server is running");
})

App.get("/users",async(req,res)=>{
    const result= await db.query("SELECT * FROM posts");
    res.json(result.rows);
});

App.post("/register",async (req,res)=>{
    const logName=req.body.name;
    const logEmail=req.body.email;
    const logPassword=req.body.password;
    try {
        const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
          logEmail,
        ]);
    
        if (checkResult.rows.length > 0) {
          res.send("Email already exists. Try logging in.");
        } else {
          //hashing the password and saving it in the database
          bcrypt.hash(logPassword, saltRounds, async (err, hash) => {
            if (err) {
              console.error("Error hashing password:", err);
            } else {
              console.log("Hashed Password:", hash);
              await db.query("INSERT INTO users (name, email, password,user_type) VALUES ($1, $2, $3,'reader')",[logName,logEmail,hash]);
            }
          });
        }
      } catch (err) {
        console.log(err);
      }
})

App.post("/login", async (req, res) => {
    const email = req.body.email;
    const loginPassword = req.body.password;
    try {
      const result = await db.query("SELECT password FROM users WHERE email = $1", [
        email,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0]; // user now only contains password
        bcrypt.compare(loginPassword, user.password, (err, result) => {
          if (err) {
            console.error("Error comparing passwords:", err);
          } else {
            if (result) {
              // Login successful logic
            } else {
              res.send("Incorrect Password");
            }
          }
        });
      } else {
        res.send("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  });
  

App.listen(port,()=>{
    console.log(`your app is running at port ${port}`);
});