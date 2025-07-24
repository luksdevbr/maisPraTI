/*Create the function isValidDate(day, month, year) that returns true if the values form a real date 
(months with 28–31 days, leap year for February) and false otherwise.*/

function isValidDate(day, month, year) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  const daysByMonth = {
    month_d28: day <= 28 || isLeap && day <= 29 ? [2] : [],
    month_d30: day <= 30 ? [1, 3, 5, 7, 8, 10, 12] : [],
    month_d31: day <= 31 ? [4, 6, 9, 11] : []
  };

  if (!daysByMonth.month_d28.includes(month) &&
      !daysByMonth.month_d30.includes(month) &&
      !daysByMonth.month_d31.includes(month)) return false;

  if (day <= 0 || year <= 0) return false;

  return true;
}

console.log(isValidDate(29, 2, 2024));


