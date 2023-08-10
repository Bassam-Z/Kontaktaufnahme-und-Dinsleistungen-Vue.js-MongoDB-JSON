const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv"); 
const {requireAuth, checkUser} = require("./middleware/authMideleware")
dotenv.config(); 
// const fs = require("fs"); 
const app = express(); 
app.use(cookieParser()); 
app.use(express.static('public')); 
app.use(express.json()); 
app.use(cors()); 


//database
// mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error Connecting to Mongodb!", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});


//routes 
const useRoutes = require("./Routes/userRoutes"); 
app.get('*', checkUser);
app.get('/', (req,res) => res.render('HomeSeite'));
app.get('/denstleisungen-Werkzeuge-Kontakt',requireAuth,(req,res) => res.render('Denst-Werk-Kontakt'));
app.use("/api", useRoutes);   
// //cookies
// app.get('/set-cookies', (req, res) => {
//   // res.setHeader('Set-Cookie', 'newUser=true');
//   res.cookie('newUser', false);
//   res.cookie('istKunde', true, {maxAge: 1000 * 60 * 60 * 24,secure: true , httpOnly: true}); 
//   res.send('You got the cookies!');
// });

// app.get('/read-cookies', (req, res) =>{
//   const cookies = req.cookies;
//   console.log(cookies.newUser);
//   res.json(cookies);
// });

