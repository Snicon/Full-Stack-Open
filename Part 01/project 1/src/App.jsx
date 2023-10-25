const App = () => {

    // Components
    const Header = ({course}) => (
        <h1>{ course }</h1>
    )

    const Part = ({name, exercises}) => (
        <p>
            {name} {exercises}
        </p>
    )

    const Content = ({parts}) => (
        <div>
            <Part name={parts[0][0]} exercises={parts[0][1]}/>
            <Part name={parts[1][0]} exercises={parts[1][1]}/>
            <Part name={parts[2][0]} exercises={parts[2][1]}/>
        </div>
    )

    const Total = ({num}) => (
        <p>Number of exercises {num}</p>
    )


    // Const-definitions
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content parts={[[part1, exercises1], [part2, exercises2], [part3, exercises3]]} />
            <Total num={exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

export default App