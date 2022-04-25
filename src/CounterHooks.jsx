import React from 'react'

const CounterHooks = (props) => {
  return (
     <div>
      <button>-</button>
      <span>{props.initialCount}</span>
      <button>+</button>
    </div>
  )
}

export default CounterHooks