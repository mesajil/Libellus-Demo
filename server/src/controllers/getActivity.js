const { Activity } = require("../db");

module.exports = async (req, res) => {
  try {
    const options = { order: [] };

    // Add orders
    const { sort_startDateTime } = req.query;
    const directions = ["ASC", "DESC"];
    if (directions.includes(sort_startDateTime)) {
      options.order.push(["startDateTime", sort_startDateTime]);
    }

    // Find all activities
    const activities = await Activity.findAll(options);

    // Send all activities
    res.json(activities);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
