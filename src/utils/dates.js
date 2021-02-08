export const getTodayDate = () => new Date().toISOString().split("T")[0];

export const getWeekAgoDate = () => {
  const today2 = new Date();
  const final = new Date(today2);
  final.setDate(today2.getDate() - 7);
  const weekAgoDate = final.toISOString().split("T")[0];
  return weekAgoDate;
};

export const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};