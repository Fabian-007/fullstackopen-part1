import { useState } from "react";

const StatisticLine = (props) => {
  console.log("table props?", props);
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  console.log("statistics props?", props);
  const { all, average, bad, good, neutral, positive } = props;
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + "%"} />
      </tbody>
    </table>
  );
};

const Button = (props) => {
  console.log("button props?", props);
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedBack = () => {
    setGood(good + 1);
  };
  const handleBadFeedBack = () => {
    setBad(bad + 1);
  };

  const handleNeutralFeedBack = () => {
    setNeutral(neutral + 1);
  };

  const all = good + bad + neutral;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good / all) * 100;

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleGoodFeedBack} text="good" />
      <Button onClick={handleNeutralFeedBack} text="neutral" />
      <Button onClick={handleBadFeedBack} text="bad" />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  );
};

export default App;
