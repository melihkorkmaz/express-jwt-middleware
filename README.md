# JWT Express JS Validation Middleware

It has build for validate and decode jwt token (which is created by https://www.npmjs.com/package/jsonwebtoken library) at middleware level.

## Installation
```
  npm install express-jwt-middleware --save
```

## Usage
You can use it both app level and route level. You will get your decoded token data in request object as "req.tokenData".
````
const jwtMiddleware = require('express-jwt-middleware');
var jwtCheck = jwtMiddleware('secretkey')
app.get('/', jwtCheck, (req, res) => {
    res.send(req.tokenData);
});
````

### Options
You can pass string or object as parameter. If you pass string, code will be assume that it's your 
secret key for jwt.

Or you can send options object as:
````
var options = {
    cert : // If you create your jwt with a private key you need to add pem file path here
    secret : // Secret key for your jwt,
    ..anyJWTOptions // For more details please check https://www.npmjs.com/package/jsonwebtoken
}
var jwtCheck = jwtMiddleware(options)
app.get('/', jwtCheck, (req, res) => {
    res.send(req.tokenData);
});
````

If you set 'cert' and 'secret' at the same time, 'secret' will be used for jwt decode process. Please use correct one.