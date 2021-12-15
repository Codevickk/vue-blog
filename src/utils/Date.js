export const getDateDiff = (date) => {
  const now = new Date();
  const postDate = new Date(date);

  const diffMiliSeconds = Math.abs(now - postDate);
  const diffSeconds = Math.ceil(diffMiliSeconds / 1000);
  const diffMinutes = Math.ceil(diffSeconds / 60);
  const diffHours = Math.ceil(diffMinutes / 60);
  const diffDays = Math.ceil(diffHours / 24);
  const diffMonths = Math.ceil(diffDays / 30);
  const diffYears = Math.ceil(diffMonths / 12);

  let diff = diffSeconds;
  let durationType = "seconds";

  if (diffSeconds > 59) {
    diff = diffMinutes;

    durationType = diffMinutes > 1 ? "minutes" : "minute";
  }

  if (diffMinutes > 59) {
    diff = diffHours;
    durationType = diffHours > 1 ? "hours" : "hour";
  }

  if (diffHours > 23) {
    diff = diffDays;
    durationType = diffDays > 1 ? "days" : "day";
  }

  if (diffDays > 29) {
    diff = diffMonths;
    durationType = diffMonths > 1 ? "months" : "month";
  }

  if (diffMonths > 11) {
    diff = diffYears;
    durationType = diffMonths > 1 ? "years" : "year";
  }

  return `${diff} ${durationType} ago`;
};
