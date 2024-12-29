//keep it simple copilot
import { useEffect, useState } from 'react';
import { auth, db } from '../firebase config/firebase';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { Button } from '@chakra-ui/react';

//db collection shape
interface FavoriteGames {
  id: any;
  name: string;
  platform: string;
  description: string;
  releaseDate: number;
  rating: number;
  userId?: any;
}

const FavoriteGames = () => {
  //store games from db
  
  const [favoriteGamess, setFavoriteGamess] = useState<FavoriteGames[]>([]); //Game interface

  //input games
  const [gameName, setGameName] = useState('');
  const [gameRating, setGameRating] = useState<null|number>(null);
  const [gamePlatform, setGamePlatform] = useState('');
  const [gameRelease, setGameRelease] = useState<null|number>(null);
  const [gameDescription, setGameDescription] = useState('');
//updates
  const [updateRating, setUpdateRating] = useState<null|number>(null);

  //game collection reference
  const collectionRef = collection(db, 'games');

  //get gamesCollection from db (http request)
  //READ DATA FROM DB
  const getGamesData = async () => {
    try {
      const data = await getDocs(collectionRef);

      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as FavoriteGames[]; //as Game interface to then be stored in state

      console.log(filteredData);

      //SET DATA TO LIST
      setFavoriteGamess(filteredData);
    } catch (err){
      console.error(err);
    }
  };

  //fetch games on mount
  useEffect(() => {
    //get game, result = store in FavoriteGamess
    getGamesData();
  }, []);

  //Functions

  //Add game (http post)
  const onAddGame = async () => {
    //exit if not logged in
    // if(!auth.currentUser) {alert('Login to add games')
    //   return;
    // }  
    //exit if fields empty
    if(!gameName || !gameRating) {
      alert('Fill both Game Name & Rating');
       return;
      }
    
    //POST GAME to DB
    try {
      //new game as a new doc
      const gameDataRequest = {
        // image: 'http/steam/img', TODO: later add it
        name: gameName,
        platform: gamePlatform,
        rating: gameRating,
        description: gameDescription,
        releaseDate: gameRelease,
        userId: auth?.currentUser?.uid,
      };
      await addDoc(collectionRef, gameDataRequest);
      //reset fields
      setGameName('');
      setGameRating(null);
      setGamePlatform('');
      setGameRelease(null);
      setGameDescription('');
      getGamesData(); // Fetch games when adding 
    } catch(err:any) {
      console.error(err)
    }

  };

  //Delete game (http delete)
  const onDeleteGame = async (id: any) => {
    try {
      //game doc reference
      const deleteDocRef = doc(db, 'games', id);
      await deleteDoc(deleteDocRef);
      getGamesData() // fetch games when deleting
    } catch (err) {
      console.error(err);
    }
  };

  //UPDATE Game(http update)
  const onUpdateGame = async (id: any) => {
    try{ const updateDocRef = doc(db, 'games', id);
      await updateDoc(updateDocRef, {rating: updateRating});
      getGamesData() // fetch games when updating
      setUpdateRating(null)
      }catch(err){
        console.error(err);
      }
   
  };

  return (
    <>
    {/* add new games */}
      <div className="flex-column">
        <h1 className='text-lg text-green-500 font-bold'>Add Games</h1>
        <input
          className="border-2 mt-1"
          placeholder="Name"
          required
          type="text"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
        <input
          className="border-2 mt-1"
          placeholder="Rating"
          required
          type="number"
          value={gameRating ?? ''}
          onChange={(e) => setGameRating(e.target.valueAsNumber)}
        />
        <input
          className="border-2 mt-1"
          placeholder="Platform"
          type="text"
          value={gamePlatform}
          onChange={(e) => setGamePlatform(e.target.value)}
        />
        <input
          className="border-2 mt-1"
          placeholder="Release Date"
          type="number"
          value={gameRelease ?? ''}
          onChange={(e) => setGameRelease(e.target.valueAsNumber)}
        />
        <input
          className="border-2 mt-1"
          placeholder="Description"
          type="text"
          value={gameDescription}
          onChange={(e) => setGameDescription(e.target.value)}
        />
        <Button className="m-1" onClick={onAddGame}>
          Add Game
        </Button>
      </div>

      {/* Fetch games from db */}
      <div className="w-100% flex-column">
        {favoriteGamess.map((game,key) => (
          <div className="" id={game.id} key={key}>
            <p 
              className="border-b-4 text-lg"
              style={{ color: game?.rating > 90 ? 'skyblue' : 'lime' }}
            >
              Game: {game?.name}
            </p>
            <div className="game-rating flex">
              <p className=''>Rating: {game?.rating}</p>
              <input className='mx-5 p-2 max-h-7 border-2 rounded-md'
                type='number'
                id={game.id}
                placeholder="update Rating..."
                value={updateRating ?? ''}
                onChange={(e) => setUpdateRating(e.target.valueAsNumber)}
              />
              <button className='mr-2 max-h-8 rounded-md p-1 bg-blue-500' onClick={() => onUpdateGame(game.id)}>Update</button>
            </div>

            <p>Platform: {game?.platform}</p>
            <p>Release Date: {game.releaseDate}</p>
            <p>Description: {game.description}</p>
            <Button onClick={() => onDeleteGame(game.id)}>Delete Game</Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FavoriteGames;
