import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useOutsideClick } from '../../hooks/useOutsideClick';
import { ArrowDownSVG } from '../../assets/icons/index';
import Label from '../label/Label';

const SelectBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'MontserratRegular', sans-serif;
`;

const SelectStyled = styled.div`
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.midnightBlue};
  border-radius: ${({ $isOpen, theme: { borderRadius } }) =>
    $isOpen
      ? `${borderRadius.inputBorderRadius} ${borderRadius.inputBorderRadius} 0 0`
      : borderRadius.inputBorderRadius};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.inputFontSize};
  color: ${({ theme: { colors } }) => colors.mediumGray};
  cursor: pointer;
  padding: ${props => (props?.icon ? '1rem 3rem' : '1rem 1rem')};
  background-image: url(${props => props?.icon});
  background-repeat: no-repeat;
  background-position: 1.1rem center;

  span {
    color: ${({ theme: { colors } }) => colors.mediumGray};
  }

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    background-image: url(${props => props?.$arrowIcon});
    background-repeat: no-repeat;
    background-position: center;
    right: ${props => (props?.icon ? '1.8rem' : '0.8rem')};
    width: 1rem;
    height: 1rem;
    transform: ${props =>
      props?.$isShowMenu ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const OptionList = styled.ul`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.inputFontSize};
  color: ${({ theme: { colors } }) => colors.mediumGray};
  background-color: ${({ theme: { colors } }) => colors.midnightBlue};
  max-height: 15rem;
  overflow-y: scroll;
  width: 100%;
  border-radius: ${({ theme: { borderRadius } }) =>
    `0 0 ${borderRadius.inputBorderRadius} ${borderRadius.inputBorderRadius}`};

  &::-webkit-scrollbar {
    background: none;
    width: 0.6em;
  }

  &::-webkit-scrollbar-thumb {
    background: black;
  }

  li {
    padding: 1rem 1.1rem;
    cursor: pointer;
    &:hover {
      background: ${({ theme: { colors } }) => colors.midnightBlueHover};
    }
  }
`;

const Select = ({
  label,
  icon,
  options,
  placeholder,
  handleChange,
  name,
  value,
}) => {
  const selectRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [selectOption, setSelectOption] = useState('');

  useOutsideClick(selectRef, setShowMenu);

  useEffect(() => {
    if (selectOption) {
      handleChange(name, options[selectOption]);
    }
  }, [selectOption]);

  return (
    <SelectBlockStyled>
      {label && <Label>{label}</Label>}
      <SelectStyled
        ref={selectRef}
        icon={icon}
        onClick={() => setShowMenu(prevState => !prevState)}
        $arrowIcon={ArrowDownSVG}
        $isShowMenu={showMenu}
        $isOpen={showMenu}
      >
        <span>
          {value
            ? Object.keys(options).find(key => options[key] === value)
            : placeholder}
        </span>
      </SelectStyled>
      {showMenu && (
        <OptionList>
          {options &&
            Object.entries(options).map(([name, value]) => (
              <li
                onClick={() => setSelectOption(() => name)}
                key={`${name}_${value}`}
              >
                {name}
              </li>
            ))}
        </OptionList>
      )}
    </SelectBlockStyled>
  );
};

export default Select;
