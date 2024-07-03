import React from 'react';
import styled from 'styled-components';

import FavoriteGameCard from './FavoriteGameCard';
import { data } from './data';

const FavoriteGameListStyle = styled.ul`
  display: grid;
  grid-template-rows: 0.8fr 0.8fr 0.8fr;
  grid-template-columns: 0fr 0fr 0fr;
  text-align: center;
  justify-content: center;
  row-gap: 1.8rem;
  column-gap: 5.7rem;
`;

const FavoriteGameList = ({ handleAddGame, selectGames }) => (
  <FavoriteGameListStyle>
    {data.map(({ name, img }) => (
      <FavoriteGameCard
        handleAddGame={handleAddGame}
        name={name}
        image={img}
        key={name}
        $isSelect={selectGames.includes(name)}
      />
    ))}
  </FavoriteGameListStyle>
);

export default FavoriteGameList;
