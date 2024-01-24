const { Activity } = require("../db");

module.exports = async (req, res) => {
  try {
    const { name, description, startDateTime, endDateTime } = req.body;

    if (!name || !startDateTime || !endDateTime)
      return res.status(400).json({ error: "Incomplete data" });

    const newActivity = await Activity.create({
      name,
      description,
      startDateTime,
      endDateTime,
    });

    return res.status(201).json({ newActivity });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
