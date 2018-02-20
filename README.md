# JWT Express JS Validation Middleware

It has build for validate and decode jwt token (which is created by https://www.npmjs.com/package/jsonwebtoken library) at middleware level.

## Installation
```
  npm install express-jwt-middleware --save
```

## Usage
You can use it bot app level and route level.
````
const jwtMiddleware = require('express-jwt-middleware');
var jwtCheck = jwtMiddleware('secretkey')
````

### Options
You can pass string or object parameter to set options. If you pass string, code will be assume that it's your 
secret key for jwt.

Or you can send options object as:
````
var options = {
    cert : // If you create your jwt with a private key you need to add pem file path here
    secret : // Secret key for your jwt,
    ..anyJWTOptions // For more details please check https://www.npmjs.com/package/jsonwebtoken
}
````

If you set 'cert' and 'secret' at the same time, 'secret' will be used for jwt decode process. Please use correct one.