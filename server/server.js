import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) return res.statusCode(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

const users = [
  { userId: 1, name: "Esra", admin: true },
  { userId: 2, name: "Sara", admin: false },
];

app.get("/users", authenticateToken, (req, res) => {
  res.json(users);
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "user" && password === "123") {
    const accessToken = getToken({ name: username });
    res.statusCode = 200;
    res.json({ token: accessToken });
  } else {
    res.statusCode = 404;
    res.json({ message: "User not found!" });
  }
});

app.listen(5000);

const getToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
};
