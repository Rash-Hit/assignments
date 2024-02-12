const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const { JWT_SECRET, jwt } = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    message: "Admin created successfully",
  });
});

router.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  Admin.find({
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

router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink } = req.body;
  const newCourse = await Course.create({
    title,
    description,
    price,
    imageLink,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;
