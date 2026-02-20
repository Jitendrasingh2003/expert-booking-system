const express = require("express");
const router = express.Router();
const Expert = require("../models/Expert");

// ALL EXPERTS
router.get("/", async (req,res)=>{
  res.json(await Expert.find());
});

// SINGLE EXPERT
router.get("/:id", async (req,res)=>{
  try{
    const expert = await Expert.findById(req.params.id);
    res.json(expert);
  }catch{
    res.status(500).json({message:"Invalid ID"});
  }
});

module.exports = router;