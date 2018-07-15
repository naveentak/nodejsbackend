import express from 'express';
import routes from './src/routes/crmRoutes';
import mongo from 'mongoose';
import bodyParser from 'body-parser';

const appserver = express();
const PORT = 9090;

appserver.all('*', function(req, res,next) {
    /**
     * Response settings
     * @type {Object}
     */
    var responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    /**
     * Headers
     */
    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }


});
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


