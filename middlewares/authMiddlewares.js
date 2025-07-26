const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        message: "Inavalid token. login again",
      });
    }
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Inavalid token. login again",
    });
  }
};
const isAdmin = () => {
  if ((req, user && req.user.role === "admin")) {
    next();
  } else {
    res.status(403).json({
      message: "Access denied, admin priviileges requried",
    });
  }
};
module.exports = {
  isAuth,
  isAdmin,
};
