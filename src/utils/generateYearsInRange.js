export const generateYearsInRange = ({ start, end }) => {
  if (!start || typeof start !== 'number') {
    throw new Error('Please enter start year');
  }

  if (!end || typeof end !== 'number') {
    throw new Error('Please enter end year');
  }

  let years = {};
  for (let i = start; i <= end; i++) {
    years = {
      ...years,
      [i]: i,
    };
  }
  return years;
};
