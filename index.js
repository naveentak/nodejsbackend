import express from 'express';
import routes from './src/routes/crmRoutes';
import mongo from 'mongoose';
import bodyParser from 'body-parser';

const appserver = express();
const PORT = 9090;


// mongoose connection
mongo.Promise = global.Promise;
mongo.connect('mongodb://mongo:27017/customerdb',{ useNewUrlParser: true });


//bodyparser setup
appserver.use(bodyParser.urlencoded({extended: true}));
appserver.use(bodyParser.json());

routes(appserver);

appserver.get('/', (req, res) =>{
    res.send(`Node and express server is running on port ${PORT}`)
});

appserver.listen(PORT, () => {
    console.log(`your server is running on port ${PORT}`)
});
