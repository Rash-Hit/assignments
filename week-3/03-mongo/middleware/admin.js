const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  Admin.findOne({
    username,
    password,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "Admin doesnt exist",
      });
    }
  });
}

module.exports = adminMiddleware;
