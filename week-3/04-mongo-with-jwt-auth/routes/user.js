const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { jwt, JWT_SECRET } = require("../config");
// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });

  res.json({
    message: "User created successfully",
  });
});

router.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.find({
    username,
    password,
  }).then((value) => {
    if (value) {
      const token = jwt.sign(
        {
          username,
        },
        JWT_SECRET
      );

      res.json({
        token,
      });
    } else {
      res.status(411).json({
        message: "Incorrect email and pass",
      });
    }
  });
});

router.get("/courses", async (req, res) => {
  const courses = await Course.find({});
  res.json({
    courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const authToken = req.headers.authorization.split(" ")[1];
  const decodedValue = jwt.decode(authToken);
  let username = decodedValue.username;
  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const authToken = req.headers.authorization.split(" ")[1];
  const decodedValue = jwt.decode(authToken);
  let username = decodedValue.username;
  const user = await User.findOne({
    username: username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
