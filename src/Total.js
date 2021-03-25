import React from 'react'

const Total = ({parts}) => {
    const amount = (item) => {
      return item.exercises
    }
  
    const sum = (prev, next) => {
      return prev + next
    }
  
    const total = parts.map(amount).reduce(sum)
    return(
      <div>
          {parts.map}
            <p>Number of exercises {total} </p>
      </div>  
    )
    }

export default Total