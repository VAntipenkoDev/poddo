import React from 'react';
import styled from 'styled-components';

const FavoriteGameCardStyle = styled.li`
  cursor: pointer;
  position: relative;

  h6 {
    font-family: 'MontserratMedium', serif;
    margin-top: 0.9rem;
    color: white;
    font-weight: normal;
    white-space: nowrap;
    font-size: 0.8rem;
  }

  &:after {
    content: ' ';
    display: ${({ $isSelect }) => ($isSelect ? 'block' : 'none')};
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    border-radius: 50%;
    background: ${({ theme: { colors } }) => colors.shuttleGrey};
    border: 5px solid ${({ theme: { colors } }) => colors.midnightBlue};
    top: -0.5rem;
    right: -0.5rem;
  }
`;

const FavoriteGameCard = ({ image, name, handleAddGame, $isSelect }) => (
  <FavoriteGameCardStyle
    $isSelect={$isSelect}
    onClick={() => handleAddGame(name)}
  >
    <img src={image} alt={name} />
    <h6>{name}</h6>
  </FavoriteGameCardStyle>
);

export default FavoriteGameCard;
