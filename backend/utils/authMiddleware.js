import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const {authorization} = req.headers;
    if(!authorization) return res.status(401).json({message: "No token provided"});

    const [bearer, token] = authorization.split(" ");
    if(bearer !== "Bearer" || !token) return res.status(401).json({message: "Invalid token format"});

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) return res.status(401).json({message: "Invalid token"});

        const {uid, email} = decoded;

        if (!req.body) req.body = {};
        req.body.uid = uid;
        req.body.email = email;
        
        next();
    });
}