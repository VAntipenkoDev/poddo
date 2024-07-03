export const getDaysInMonth = ({ month, year }) => {
  let days = {};
  const dayCount = new Date(year, month, 0).getDate();

  for (let i = 0; i <= dayCount; i++) {
    days = {
      ...days,
      [i]: i,
    };
  }

  return days;
};
