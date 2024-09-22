const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/data',(req,res) => {
    res.json({message:'Hello from server!',time:new Date()});
});

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});