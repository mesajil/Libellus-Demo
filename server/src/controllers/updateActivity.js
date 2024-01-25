const { Activity } = require("../db");
const compareDateTime = require("../utils/compareDateTime");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, startDateTime, endDateTime } = req.body;

    // Verify that the activity exists
    const activity = await Activity.findByPk(id);

    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }

    // Verify that startDateTime is before or equal to endDateTime
    const date1 = startDateTime || activity.startDateTime;
    const date2 = endDateTime || activity.endDateTime;
    if (compareDateTime(date1, date2) === 1) {
      const error = "startDateTime is not before or equal to endDateTime";
      return res.status(400).json({ error });
    }

    // Updates the activity with the new data
    await activity.update({
      name,
      description,
      startDateTime,
      endDateTime,
    });

    // Send the response with a success message
    return res.json({
      message: "Activity updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
