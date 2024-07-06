import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ButtonGroup from '../buttonGroup/ButtonGroup';
import Select from '../select/Select';
import Label from '../label/Label';
import { month } from './dates';
import { getDaysInMonth } from '../../utils/getDaysInMonth';
import { generateYearsInRange } from '../../utils/generateYearsInRange';
import ErrorMessage from '../errorMessage/ErrorMessage';

const DatePickerStyled = styled.div``;

const DatePicker = ({ label, onChange, values, errors }) => {
  const [errorsLength, setErrorsLength] = useState(
    Object.values(errors).filter(value => value !== '').length,
  );
  const days = getDaysInMonth({ month: values.month, year: values.year });
  const years = generateYearsInRange({ start: 1800, end: 2020 });

  useEffect(() => {
    setErrorsLength(Object.values(errors).filter(value => value !== '').length);
  }, [errors]);

  useEffect(() => {
    const { day } = values;
    const _days = Object.values(days);

    if (values.day && !_days.includes(day)) {
      onChange('day', '');
    }
  }, [values.year, values.month]);

  return (
    <DatePickerStyled>
      {label && <Label>{label}</Label>}
      <ButtonGroup direction="row" gap={2}>
        <Select
          placeholder="Day"
          handleChange={(name, value) => onChange(name, value)}
          name="day"
          options={days}
          value={values.day}
        />
        <Select
          placeholder="Month"
          handleChange={(name, value) => onChange(name, value)}
          options={month}
          name="month"
          value={values.month}
        />
        <Select
          placeholder="Year"
          handleChange={(name, value) => onChange(name, value)}
          options={years}
          name="year"
          value={values.year}
        />
      </ButtonGroup>
      {!!errorsLength && (
        <ErrorMessage>
          Please select:{' '}
          {errorsLength &&
            Object.values(errors)
              .filter(value => value !== '')
              .map(
                (value, idx) =>
                  `${value}${idx < errorsLength - 1 ? ', ' : '.'} `,
              )}
        </ErrorMessage>
      )}
    </DatePickerStyled>
  );
};

export default DatePicker;
