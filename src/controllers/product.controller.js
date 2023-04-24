const mongoose = require("mongoose");
const express = require("express");

module.exports = {
  //Region create Problem
  getProducts: async (req, res) => {
    try {
      res.status(200).json({ message: "good" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  //End region
};
