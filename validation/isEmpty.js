const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "strings" && value.trim().length === 0);

module.exports = isEmpty;
