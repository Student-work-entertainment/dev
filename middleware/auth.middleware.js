const jwt = require("jsonwebtoken");
const jwtSecret = "igor-taras";

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Bearer "TOKEN"
    if (!token) {
      return res.status(401).json({ message: "Not auth :(" });
    }
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (e) {
    res
      .status(401)
      .json({ message: "Something is wrong. Try again (Нет авторизации)" });
  }
};
