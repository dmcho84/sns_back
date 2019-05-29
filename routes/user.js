const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const db = require("../models");

// PATH = '/api/user';
router.get("", (req, res, next) => {});

router.post("", async (req, res) => {
  try {
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.id
      }
    });

    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다."); // send = 문자열 & 버퍼
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await db.User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword
    });
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
    // 에러 처리를 여기서

    return next(e); //  최후의 수단 ( 프론트로 에러가 넘어감 )
  }
});
router.get("/:id", (req, res) => {});
router.post("/api.user/logout", (req, res) => {});
router.post("/login", (req, res) => {});
router.post("/:id/follow", (req, res) => {});
router.delete("/:id/follow", (req, res) => {});
router.post("/:id/follower", (req, res) => {});
router.delete("/:id/follower", (req, res) => {});
router.get("/:id/posts", (req, res) => {});

module.exports = router;
