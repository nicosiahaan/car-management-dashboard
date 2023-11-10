const isAdmin = (req, res, next) => {
    if(req.query.role === "admin"){
        next();
        return;
    }

    res.status(401).json({
        status: "unauthorized", 
        message: "you are not admin, please login as administrator"
    })
}


module.exports = isAdmin