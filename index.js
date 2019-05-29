const express = require("express");

const userAPIRouter = require("./routes/user");
const postAPIRouter = require("./routes/post");
const postsAPIRouter = require("./routes/posts");

const db = require("./models");

const app = express();
db.sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API = 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.get("/", (req, res) => {
  res.send("HELLO SERVER");
});
app.use("/api/user", userAPIRouter);
app.use("/api/post", postAPIRouter);
app.use("/api/posts", postsAPIRouter);

app.listen(3065, () => {
  console.log(`server is running on localhost:3065`);
});
