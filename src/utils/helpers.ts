export const parseDate = (date: string) => {
  if (!date) return "";

  const dateObj = new Date(date);
  let hour: string | number = dateObj.getHours();
  if (hour < 10) hour = "0" + String(hour);
  let minute: string | number = dateObj.getHours();
  if (minute < 10) minute = "0" + String(minute);

  return `${hour}:${minute}`;
};
