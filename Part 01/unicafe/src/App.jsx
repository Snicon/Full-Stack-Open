import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = (good / all) * 100;

    if (all === 0) {
        return(
            <div>
                <h2>statistics</h2>

                <p>No feedback given</p>
            </div>
        )
    } else {
        return (
            <div>
                <h2>statistics</h2>

                <table>
                    <tbody>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="all" value={all} />
                        <StatisticLine text="average" value={(average.toFixed(1))} />
                        <StatisticLine text="positive" value={positive.toFixed(1) + " %"} />
                    </tbody>
                </table>
            </div>
        )
    }
}

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const addGood = () => setGood(good + 1)
    const addNeutral = () => setNeutral(neutral + 1)
    const addBad = () => setBad(bad + 1)

    return (
        <div>
            <div>
                <h1>give feedback</h1>
                <Button text="good" onClick={addGood}/>
                <Button text="neutral" onClick={addNeutral} />
                <Button text="bad" onClick={addBad} />
            </div>

            <Statistics bad={bad} good={good} neutral={neutral} />
        </div>
    )
}

export default App