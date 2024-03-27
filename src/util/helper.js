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
  let duration;
  if (hours === "00") {
    duration = `${minutes} min`;
  } else {
    duration = `${hours} hr ${minutes} min`;
  }

  return duration;
}

/*
const date = new Date("2024-03-17T07:30:00.000Z");

const options = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
  timeZone: 'Europe/London'
};

const formattedDate = date.toLocaleString('en-GB', options);

console.log(formattedDate); */
