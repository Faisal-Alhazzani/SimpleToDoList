exports.getDate = function () {
  let today = new Date();
  let options = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  let dateText = today.toLocaleDateString("en-US", options);
  return dateText;
};

exports.getDay = function () {
  let today = new Date();
  let options = {
    weekday: "long",
  };

  let dayText = today.toLocaleDateString("en-US", options);
  return dayText;
};
