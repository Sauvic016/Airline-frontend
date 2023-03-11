export function getTimeIST(timestamp) {
  let date = new Date(timestamp);
  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  date = date.toLocaleTimeString("en-IN", options);
  // date = date.substring(0, 4) + date.substring(7);
  return date;
}
export function getDuration(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  // If end time is before start time, add 1 day to end time
  if (end < start) {
    end.setDate(end.getDate() + 1);
  }

  const durationInMs = end - start;
  const hours = String(Math.floor(durationInMs / (1000 * 60 * 60))).padStart(2, "0");
  const minutes = String(Math.floor((durationInMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
  const duration = `${hours} hr ${minutes} min`;

  return duration;
}
