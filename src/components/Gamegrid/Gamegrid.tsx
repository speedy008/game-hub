import React, { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface GamesProps {
  count: number;
  results: Game[];
}

const Gamegrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GamesProps>("/xgames")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
      {games && games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
    </>
  );
};

export default Gamegrid;
