import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const TabsStyle = styled.ul`
  display: flex;
  font-family: 'MontserratBold', serif;
  a {
    width: 100%;
  }
`;

const TabItem = styled.li`
  cursor: pointer;
  width: 100%;
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;
  color: ${({ $isActive, theme: { colors } }) =>
    changeColorActiveTab({
      $isActive,
      activeColor: colors.lightSlateBlue,
      color: colors.shuttleGrey,
    })};
  &::after {
    display: block;
    margin-top: 0.9rem;
    content: ' ';
    height: 5px;
    width: 100%;
    background: ${({ $isActive, theme: { colors } }) =>
      changeColorActiveTab({
        $isActive,
        activeColor: colors.lightSlateBlue,
        color: colors.shuttleGrey,
      })};
  }
`;

const changeColorActiveTab = ({ $isActive, activeColor, color }) =>
  $isActive ? activeColor : color;

const Tabs = ({ tabs = [] }) => {
  const location = useLocation();

  return (
    <TabsStyle>
      {tabs.map(({ name, url }) => (
        <Link key={`${name}_${url}`} to={url}>
          <TabItem $isActive={url === location.pathname}>{name}</TabItem>
        </Link>
      ))}
    </TabsStyle>
  );
};

export default Tabs;
