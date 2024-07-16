import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import {
  SVGGame,
  SVGChart,
  SVGPetHouse,
  SVGActivity,
  SVGHome,
  SVGRabbit,
  SVGUser,
  SVGRoulette,
} from '../../svgComponents';

const links = [
  { name: 'home', SVGIcon: SVGHome, link: '/home' },
  { name: 'game', SVGIcon: SVGGame, link: '/game' },
  { name: 'rabbit', SVGIcon: SVGRabbit, link: '' },
  { name: 'chart', SVGIcon: SVGChart, link: '' },
  { name: 'activity', SVGIcon: SVGActivity, link: '' },
  { name: 'roulette', SVGIcon: SVGRoulette, link: '' },
  { name: 'profile', SVGIcon: SVGUser, link: '' },
  { name: 'pet', SVGIcon: SVGPetHouse, link: '' },
];

const NavbarStyled = styled.nav`
  background: ${({ theme: { colors } }) => colors.darkTeal};
  max-width: 7.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  overflow: hidden;

  ul {
    width: 100%;
  }
`;

const NavbarItem = styled.li`
  position: relative;
  cursor: pointer;
  display: flex;
  background: ${({ isActive, theme: { colors } }) =>
    isActive ? colors.midnightBlue : null};
  justify-content: center;
  align-items: center;

  height: 3.2rem;
  border-radius: ${({ isActive, theme: { colors } }) =>
    isActive ? '50px 0 0 50px' : null};

  svg {
    path {
      fill: ${({
        isActive,
        theme: {
          gradients: { activeNavLink },
        },
      }) => (isActive ? `url(#${activeNavLink})` : null)};
    }
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarStyled>
      <ul>
        {links.map(({ name, SVGIcon, link }) => (
          <NavbarItem
            isActive={location.pathname === link}
            key={`${name}_${link}`}
          >
            <Link to={link}>
              <SVGIcon />
            </Link>
          </NavbarItem>
        ))}
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
