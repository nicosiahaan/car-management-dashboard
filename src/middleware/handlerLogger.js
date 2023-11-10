const handleLogger = (req, res, next) => {
    console.log(`User is accessing by using user agent: ${req.get('User-Agent')}`)      
    next();
}

module.exports = handleLogger;