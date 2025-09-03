import { useState } from "react";
import { hydrateRoot } from "react-dom/client";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  //init array of zeros
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  console.log("initial votes", votes);

  const handleNextAnecdotes = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    console.log(randomIndex);
    setSelected(randomIndex);
  };

  //function to vote for current anecdotes
  const handleVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1; // increament votes of current anecdotes
    setVotes(newVotes);
    console.log("increamented votes", votes);
  };

  //Math.max() to find highest vote in the array
  const maxVotes = Math.max(...votes);
  console.log("current highest vote", maxVotes);

  //indexOf() to find current index of maxVotes
  const highestVoteIndex = votes.indexOf(maxVotes);
  console.log("highest vote index", highestVoteIndex);

  return (
    <>
      <h2>Anecdote of the day</h2>

      <p>{anecdotes[selected]}</p>
      <p>
        has {votes[selected]} {votes[selected] === 1 ? "vote" : "votes"}{" "}
      </p>
      <Button onClick={handleVotes} text="vote" />
      <Button onClick={handleNextAnecdotes} text="next anecdotes" />

      <h2>Anecdotes with most vote</h2>
          {maxVotes === 0 ? (<p>No votes yet...</p>) : (
          <>
          <p>{anecdotes[highestVoteIndex]}</p>
          <p>
            has {votes[highestVoteIndex]} {''}{votes[highestVoteIndex] === 1 ? "vote" : "votes"}
          </p>
          </>
      )}
    </>
  );
};

export default App;
