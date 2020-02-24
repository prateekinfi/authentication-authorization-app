const express= require("express")
const app = express();
const config = require("config");


app.use("/",userroutes);


const port = process.env.PORT || config.get("port");


const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
