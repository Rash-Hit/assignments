const { JWT_SECRET, jwt } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const authToken = req.headers.authorization.split(" ")[1];
  if (authToken) {
    try {
      const decodedValue = jwt.verify(authToken, JWT_SECRET);
      if (decodedValue.username) {
        next();
      }
    } catch (error) {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  }
}

module.exports = adminMiddleware;
