import React from "react";
import { Game } from "../../hooks/useGame";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const Gamecard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default Gamecard;
