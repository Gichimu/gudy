const router = require("express").Router();
const jwt = require("jsonwebtoken");
require('dotenv').config()
const Child = require("../model/Child");
const verify = require("../verify");

// add one child
router.post("/add", async (req, res) => {
  const child = new Child({
    firstName: req.body.firstName.toLowerCase(),
    middleName: req.body.middleName.toLowerCase(),
    lastName: req.body.lastName,
    gender: req.body.gender,
    nokFirstName: req.body.nokFirstName.toLowerCase(),
    nokMiddleName: req.body.nokMiddleName.toLowerCase(),
    relation: req.body.relation,
    nokNumber: req.body.nokNumber,
    dob: req.body.dob,
    level: req.body.level,
    primarySchool: req.body.primarySchool,
    class: req.body.class,
    school: req.body.school,
    form: req.body.form,
    photoUrl: req.body.photoUrl,
  });
  const childNameExists = await Child.findOne({
    firstName: req.body.firstName.toLowerCase(),
    middleName: req.body.middleName.toLowerCase(),
  });

  if (childNameExists) return res.status(400).send("Child name already exists");

  try {
    const savedChild = await child.save();
    res.status(200).send(savedChild);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// get all children
router.get("/", async (req, res) => {
  const children = await Child.find({});
  res.send(children);
});

// get all children by name
router.get("/one", async (req, res) => {
  const child = await Child.find({ firstName: req.body.firstName.toLowerCase() });
  res.send(child);
});

// get child by full name
// TODO
router.get("/one/name", async (req, res) => {
  const child = await Child.findOne({firstName: req.body.firstName, middleName: req.body.middleName});
  res.send(child);
});

// get child by id
router.get("/one/:id", async (req, res) => {
  const child = await Child.findOne({ _id: req.params.id });
  res.send(child);
});

// get jwt token
router.post("/token", async (req, res) => {
    const token = jwt.sign({id: req.body.id}, process.env.SECRET);
    res.send(JSON.stringify(token));
});

module.exports = router;
