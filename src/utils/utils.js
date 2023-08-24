export function convertUnixTimestampToTime(unixTimestamp) {
  /** 
  * @param {number} unixTimestamp - the unix timestamp
  * @returns {string} - time of that day in format HH:MM
  */
  const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function allKeysAreNull(obj) {
  return Object.keys(obj).every(key => obj[key] === null);
}