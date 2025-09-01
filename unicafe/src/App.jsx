import { useState} from  'react'

const Display = (props)=> {
console.log(props)
return (
<>
<h1>statistics</h1>
<p>good {props.good}</p>
<p>bad {props.bad}</p>
<p>neutral {props.neutral}</p>
</>
)

}

const Button = (props) =>  {
  console.log("what props", props)
return (
  <>
  <button onClick = {props.onClick}>{props.text}</button>
  </>
)

}



const App = ()=>{
const [good, setGood] = useState(0)
const [bad, setBad] = useState(0)
const [neutral, setNeutral] = useState(0)

const handleGoodFeedBack = () =>{
setGood(good + 1)
}
const handleBadFeedBack = () =>{
setBad(bad + 1)
}

const handleNeutralFeedBack = () =>{
setNeutral(neutral + 1)
}
return (
  <>
  <h1>give feedback</h1>
  <Button onClick={handleGoodFeedBack} text = 'good'/>
  <Button onClick={handleBadFeedBack} text = 'bad'/>
  <Button onClick={handleNeutralFeedBack} text = 'neutral'/>
  <Display good = {good} bad = {bad} neutral = {neutral}/>
  </>
)
}





 

export default App