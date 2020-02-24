const express= require("express")
const app = express();

app.use("/",userroutes);


const port = 3030;
//process.env.PORT || config.get("port");


const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
