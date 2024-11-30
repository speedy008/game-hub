import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../../hooks/useGame";
import Gamecard from "../Gamecard/Gamecard";
const Gamegrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={[1, 2, 3, 4]} gap="20px">
        {games && games.map((game) => <Gamecard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
