import moment from "moment";

export function checkIfSameDate(first, second) {
  const f = convertToCorrectFormate(first);
  const s = convertToCorrectFormate(second);
  return moment(f).isSame(s, "day");
}

function convertToCorrectFormate(timestamp) {
  return moment(timestamp * 1000).format("YYYY-MM-DD");
}
