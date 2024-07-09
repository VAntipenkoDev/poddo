export const getDaysInMonth = ({ month, year }) => {
  let days = {};
  const dayCount = new Date(year, month, 0).getDate();

  for (let i = 1; i <= dayCount; i++) {
    days = {
      ...days,
      [i]: i,
    };
  }

  return days;
};
