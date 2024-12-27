import { useEffect, useState } from 'react';
import { db } from '../firebase config/firebase';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { Button } from '@chakra-ui/react';

//db collection shape
interface SteamGame {
  id: any;
  name: string;
  platform: string;
  description: string;
  releaseDate: number;
  rating: number;
}

const SteamGames = () => {
  //store games from db
  const [steamGames, setSteamGames] = useState<SteamGame[]>([]); //Game interface

  //input games
  const [gameName, setGameName] = useState('');
  const [gameRating, setGameRating] = useState(0);
  const [gamePlatform, setGamePlatform] = useState('');
  const [gameRelease, setGameRelease] = useState(2000);
  const [gameDescription, setGameDescription] = useState('');

  //get gamesCollection from db (http request)
  useEffect(() => {
    //READ DATA FROM DB
    const getGamesData = async () => {
      const gameCollectionRef = collection(db, 'games');
      const data = await getDocs(gameCollectionRef);

      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as SteamGame[]; //as Game interface to then be stored in state

      console.log(filteredData);

      //SET DATA TO LIST
      setSteamGames(filteredData);
    };

    //get game, result = store in steamGames
    getGamesData();
  }, []);

  //functions
  const onSubmitGame = async () => {
    //POST GAME to DB

    //take all game attributes and store it as a new doc
    const newGameData = {
      // image: 'http/steam/img', TODO: later add it
      name: gameName,
      platform: gamePlatform,
      rating: gameRating,
      description: gameDescription,
      releaseDate: gameRelease,
    };

    const newGameRef = collection(db, 'games');
    await addDoc(newGameRef, newGameData);
  };

  //log game input state
  console.log(gameName);

  return (
    <>
      <div className="flex-column">
        <input
          placeholder="Name"
          type="text"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
        <input
          placeholder="Rating"
          type="number"
          value={gameRating}
          onChange={(e) => setGameRating(e.target.valueAsNumber)}
        />
        <input
          placeholder="Platform"
          type="text"
          value={gamePlatform}
          onChange={(e) => setGamePlatform(e.target.value)}
        />
        <input
          placeholder="Release Date"
          type="number"
          value={gameRelease}
          onChange={(e) => setGameRelease(e.target.valueAsNumber)}
        />
        <input
          placeholder="Description"
          type="text"
          value={gameDescription}
          onChange={(e) => setGameDescription(e.target.value)}
        />
        <Button className="m-1" onClick={onSubmitGame}>
          Submit Game
        </Button>
      </div>

      {/* Games from db */}
      <div className="w-100% flex-column">
        {steamGames.map((game) => (
          <div className="" key={game.id}>
            <h1 style={{ color: game?.rating > 90 ? 'skyblue' : 'lime' }}>
              Title: {game?.name}
            </h1>
            <p>Rating: {game?.rating}</p>
            <p>Platform: {game?.platform}</p>
            <p>Release Date: {game.releaseDate}</p>
            <p>Description: {game.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SteamGames;
