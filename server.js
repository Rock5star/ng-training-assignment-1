const express = require("express"); 
const bodyParser = require("body-parser"); 
const userRoutes = require("./routes/task"); 
const app = express(); 
const cors = require('cors')
app.use(bodyParser.json()); 

app.use(cors());
 
app.use("/user", taskRoutes); 

app.listen(3000, () => { 
console.log("Server is running on port 3000"); 
});
