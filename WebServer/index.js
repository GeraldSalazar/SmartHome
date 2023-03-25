var express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');

const port = 3000;

// routers
const authRouter = require('./src/routes/auth.route');
const smartHomeRouter = require('./src/routes/smart-home.route')
///////////

var app = express();

// middlewares
app.use(cors({origin: '*'}))
app.use(bodyParser.json())
app.use('/api/login', authRouter)
app.use('/api', smartHomeRouter)
//////////////

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    
    return;
});


app.listen(port);