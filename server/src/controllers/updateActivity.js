const { Activity } = require("../db");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, startDateTime, endDateTime } = req.body;

    // Verify that the activity exists
    const activity = await Activity.findByPk(id);

    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
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
