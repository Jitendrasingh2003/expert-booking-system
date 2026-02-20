const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// CREATE BOOKING
router.post("/", async (req, res) => {
  const { expertId, date, timeSlot } = req.body;

  const exists = await Booking.findOne({ expertId, date, timeSlot });

  if (exists) {
    return res.status(400).json({ message: "Slot booked" });
  }

  await Booking.create(req.body);
  res.json({ message: "Booked Successfully" });
});

// GET BOOKINGS BY EMAIL
router.get("/email/:email", async (req, res) => {
  const data = await Booking.find({ email: req.params.email });
  res.json(data);
});

module.exports = router;