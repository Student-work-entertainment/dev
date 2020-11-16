const { Router } = require("express");
const router = Router();
const moment = require("moment");

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
    res.status(201).json({ message: " Вакансия создана! 😉", jobId: jobs._id });
  } catch (e) {
    res.status(500).json({
      message: "Проблема с созданием вакансии, попробуйте ещё раз 😓",
    });
  }
});

router.post("/search", async (req, res) => {
  try {
    const { title, city } = req.body;
    const jobs = await Jobs.find({
      title: { $regex: title, $options: "i" },
      city: { $regex: city, $options: "i" },
    });
    if (jobs.length <= 0) {
      res.status(500).json({
        message: "Не удалось найти вакансию 😓",
      });
    }

    const jobsMap = jobs.map((job, index) => {
      return {
        jobTitle: job.title,
        jobBody: job.body,
        jobCity: job.city,
        jobId: job.id,
      };
    });
    res.status(201).json(jobsMap);
  } catch (e) {
    res.status(500).json({ message: "Something is wrong. Try again" });
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
