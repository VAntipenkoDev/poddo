import React, { useState } from 'react';

import FavoriteGameList from '../../favoriteGameList/FavoriteGameList';
import Button from '../../button/Button';
import ButtonGroup from '../../buttonGroup/ButtonGroup';
import Input from '../../input/Input';
import { FormStyled } from '../login/LoginForm';

const FavoriteGamesForm = () => {
  const [selectGames, setFavoriteGames] = useState([]);

  const handleAddGame = name => {
    setFavoriteGames(prevState => {
      if (selectGames.includes(name)) {
        return selectGames.filter(gameName => gameName !== name);
      }

      return [...prevState, name];
    });
  };

  return (
    <FormStyled>
      <ButtonGroup gap={2}>
        <Input placeholder="Search for favorite game" />
        <FavoriteGameList
          selectGames={selectGames}
          handleAddGame={handleAddGame}
        />
      </ButtonGroup>
      <Button>Finish</Button>
    </FormStyled>
  );
};

export default FavoriteGamesForm;
