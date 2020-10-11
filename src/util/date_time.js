import moment from "moment";

export function checkIfSameDate(first, second) {
  const f = convertToCorrectFormat(first);
  const s = convertToCorrectFormat(second);
  return moment(f).isSame(s, "day");
}

function convertToCorrectFormat(timestamp) {
  return moment(timestamp * 1000).format("YYYY-MM-DD");
}
