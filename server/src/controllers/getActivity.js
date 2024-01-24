const { Activity } = require("../db");

module.exports = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
