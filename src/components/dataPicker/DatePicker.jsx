import React, { useEffect, useState } from 'react';

import ButtonGroup from '../buttonGroup/ButtonGroup';
import Select from '../select/Select';
import Label from '../label/Label';
import { month } from './dates';
import { getDaysInMonth } from '../../utils/getDaysInMonth';
import { generateYearsInRange } from '../../utils/generateYearsInRange';

const DatePicker = ({ label }) => {
  const [date, setDate] = useState({  м 
    day: '',
    month: '',
    year: '',
  });

  const days = getDaysInMonth({ month: date.month, year: date.year });
  const years = generateYearsInRange({ start: 1800, end: 2020 });

  useEffect(() => {
    const { day } = date;
    const _days = Object.values(days);
    if (!_days.includes(day)) {
      setDate(prevState => {
        return {
          ...prevState,
          day: '',
        };
      });
    }
  }, [date.year, date.month]);

  const handleChange = (name, value) => {
    setDate(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div>
      {label && <Label>{label}</Label>}
      <ButtonGroup direction="row" gap={2}>
        <Select
          placeholder="Day"
          handleChange={handleChange}
          name="day"
          options={days}
          value={date.day}
        />
        <Select
          placeholder="Month"
          handleChange={handleChange}
          options={month}
          name="month"
          value={date.month}
        />
        <Select
          placeholder="Year"
          handleChange={handleChange}
          options={years}
          name="year"
          value={date.year}
        />
      </ButtonGroup>
    </div>
  );
};

export default DatePicker;
