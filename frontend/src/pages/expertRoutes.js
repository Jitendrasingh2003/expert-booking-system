const router = require("express").Router();
const Expert = require("../models/Expert");

// ALL EXPERTS
router.get("/", async (req,res)=>{
  res.json(await Expert.find());
});

// SINGLE EXPERT
router.get("/:id", async (req,res)=>{
  res.json(await Expert.findById(req.params.id));
});

module.exports = router;