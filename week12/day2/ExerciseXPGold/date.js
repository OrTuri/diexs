// Exercise 1: Date #1

const timeUntilJanuary1 = () => {
  return Math.ceil(
    (new Date(new Date().getFullYear() + 1, 00, 01) - new Date()) /
      1000 /
      (60 * 60 * 24)
  );
};

// Exercise 2 : Date #2

const minutesLived = (year, month, day) => {
  return `You lived ${Math.trunc(
    (new Date() - new Date(year, month - 1, day)) / 1000 / 60
  )} minutes so far!`;
};

// Exercise 3: Date #3

const dateHolidays = require("date-holidays");
const holidays = new dateHolidays("IL");

const nextHoliday = () => {
  let i = 0;
  const date = (inc) => {
    return new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + inc
    );
  };
  while (!holidays.isHoliday(date(i))) {
    i++;
    date(i);
  }
  //   console.log(`Found a holiday!!! ${date(i)}`);
  console.log(holidays.isHoliday(date(i)));
  const daysUntilHoliday = Math.ceil(
    new Date(date(i) - new Date()) / 1000 / (60 * 60 * 24)
  );
  const holidayName = holidays.isHoliday(date(i))[0].name;
  return `The next holiday is: ${holidayName} and it will be in ${daysUntilHoliday} days!`;
};

module.exports = {
  timeUntilJanuary1,
  minutesLived,
  nextHoliday,
};
