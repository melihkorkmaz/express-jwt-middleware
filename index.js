"use strict";
var jwt = require('jsonwebtoken');
var fs = require('fs');

var secretOrCert, options = null;
/**
 * Express middleware function
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
var middlewareFunc = function (req, res, next) {
    const token = clearToken(req.headers.authorization);
  
    jwt.verify(token, secretOrCert, options, function (err, decoded) {
        if (err)
            res.status(403).json(isEmpty(err) ? { message: 'Wrong token!' } : err);
        else
            req.tokenData = decoded;
        next();
    });
};

/**
 * Check if object is empty
 * @param {object} obj 
 */
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
};

/**
 * Remove unrelated string in token like Bearer.
 * @param {string} token 
 */
var clearToken = function (token) {
    if (/\s/g.test(token))
        return token.split(' ')[1];
    else
        return token;
};

/**
 * Read cert file from a path.
 * @param {string} path 
 */
var bufferCert = function (path) {
    try {
        return fs.readFileSync(path);
    } catch (error) {
        throw new Error('Public Certificate file is missing!');
    }
};

module.exports = function (opt) {
    if (!opt) throw new Error('Please provide secret for jwt middleware at least!')

    secretOrCert = (typeof opt === "string")
                    ? opt 
                    : opt.hasOwnProperty('secret')
                        ? opt.secret
                        : bufferCert(opt.cert);

    options = opt;
    return middlewareFunc;
};