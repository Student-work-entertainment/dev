const { Router } = require("express");
const router = Router();

const Jobs = require("../models/JobsVacansy");

router.post("/create", async (req, res) => {
  try {
    const { title, body, city } = req.body;
    const jobs = new Jobs({
      title,
      body,
      city,
    });
    await jobs.save();
    res.status(201).json({ message: " Вакансия создана! 😉" });
  } catch (e) {
    res.status(500).json({
      message: "Проблема с созданием вакансии, попробуйте ещё раз 😓",
    });
  }
});

router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Jobs.find({});
    res.json(jobs);
  } catch (e) {
    res.status(500).json({ message: "Something is wrong. Try again" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const jobs = await Jobs.findById(req.params.id);
    res.json(jobs);
  } catch (e) {
    res.status(500).json({ message: "Something is wrong. Try again" });
  }
});

module.exports = router;
