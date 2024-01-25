const { Activity } = require("../db");
const compareDateTime = require("../utils/compareDateTime");

module.exports = async (req, res) => {
  try {
    const { name, description, startDateTime, endDateTime } = req.body;

    if (!name || !startDateTime || !endDateTime)
      return res.status(400).json({ error: "Incomplete data" });

    // Verify that startDateTime is before or equal to endDateTime
    if (compareDateTime(startDateTime, endDateTime) === 1) {
      const error = "startDateTime is not before or equal to endDateTime";
      return res.status(400).json({ error });
    }

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
