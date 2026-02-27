const parseTimeToFloat = (timeStr) => {
  if (!timeStr) return 0;
  const cleaned = timeStr.toLowerCase().replace(/[^0-9:h]/g, '');
  const parts = cleaned.split(/[:h]/);
  const h = parseInt(parts[0], 10) || 0;
  const m = parseInt(parts[1], 10) || 0;
  return h + m / 60;
};
class OpeningHours {
  constructor(rangeStr) {
    const parts = rangeStr.split(/[-–]| à /);
    if (parts.length !== 2) {
      this.start = 0;
      this.end = 0;
    } else {
      this.start = parseTimeToFloat(parts[0].trim());
      this.end = parseTimeToFloat(parts[1].trim());
    }
  }
}
const standard = '12:00-15:00, 19:00-23:00';
const lines = standard.split(/[,\n]/).map((s) => s.trim()).filter(Boolean);
const rawRanges = lines.map(line => {
  const timePart = line.includes(':') && !/^\d{1,2}h/.test(line)
    ? line.split(':').slice(1).join(':').trim()
    : line;
  return timePart;
});
console.log(rawRanges);
const ranges = rawRanges.map(r => new OpeningHours(r));
console.log(ranges);
