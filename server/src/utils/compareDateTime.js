module.exports = (dateTime1, dateTime2) => {
  const newDateTime1 = new Date(dateTime1);
  const newDateTime2 = new Date(dateTime2);
  if (newDateTime1 > newDateTime2) return 1;
  if (newDateTime1 < newDateTime2) return -1;
  return 0;
};
