const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    activityId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};

/**
 * Example:
 * 
 * Activity.create({
  name: 'Meeting',
  description: 'Project discussion',
  startDate: '2024-01-23', // Format: YYYYY-MM-DD
  endDate: '2024-01-23',
  startTime: '14:00:00',
  endTime: '15:30:00',
})
 */
