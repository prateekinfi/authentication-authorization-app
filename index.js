const express= require("express")
const app = express();
const config = require("config");
const user = require("./routes/user")
const users= require("./routes/users")
const auth = require("./routes/auth")
const mongoose = require('mongoose');
const parser = require('body-parser');

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));

app.use("/user",user);
app.use("/login",auth);
app.use("/users",users);


const db = config.get('db');
mongoose.connect(db).then(() => console.log(`Connected to ${db}...`));

const port = process.env.PORT || config.get("port");


const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
