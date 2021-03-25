import React from 'react'
import ReactDOM from 'react-dom'
import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}
               part2={part2} exercises2={exercises2}
               part3={part3} exercises3={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))