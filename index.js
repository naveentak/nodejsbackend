import express from 'express';

const appserver = express();
const PORT = 9090;

appserver.get('/', (req, res) =>{
    res.send(`Node and express server is running on port ${PORT}`)
});

appserver.listen(PORT, () => {
    console.log(`your server is running on port ${PORT}`)
});
