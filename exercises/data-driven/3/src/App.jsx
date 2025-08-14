import Joke from './components/Joke';
import JokeData from './JokesData.js';

export default function App() {
  return (
    <>
      {JokeData.map(joke => (
        <Joke setup={joke.setup} punchline={joke.punchline} />
      ))}
    </>
  );
}
