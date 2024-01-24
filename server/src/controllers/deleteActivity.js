const { Activity } = require("../db");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    // Verify that the activity exists
    const activity = await Activity.findByPk(id);

    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }

    // Delete the activity
    await activity.destroy();

    // Send the response with a success message
    return res.json({
      message: "Activity deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
