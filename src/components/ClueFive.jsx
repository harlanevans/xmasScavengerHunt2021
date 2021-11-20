import React, { useState } from "react";
import { Link } from "react-router-dom";

// This is up to annie to figure out which album this is? My Morning Jacket
export const ClueFive = () => {
  const [hinted, setHinted] = useState(false)

  const [answer, setAnswer] = useState('')
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false)

  const correctAnswer = "my morning jacket"

  const handleSubmit = () => {
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setAnsweredCorrectly(true)
    }
  }

  return (
    <div>
      <h2>Clue #5 (A)</h2>

      <div style={{margin: '.5em 0'}}>
        <p>The Devil is in the Details</p>
        <p>Similar to a Penny for your Thoughts</p>
        <p>Whether it's in black and white or In Color</p>
        <p>This isn't as Complex as I would like</p>
        <p>It's quite the opposite of what you Least Expected</p>
      </div>

      <div>
        <input placeholder='Answer...' value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </div>
      <div style={{ margin: '.5em 0' }}><button onClick={handleSubmit}>Submit Answer</button></div>

      {answeredCorrectly &&
        <div>
          <p>Correct!</p>
          <Link to='/clueFive'>
            <button>Next Clue</button>
          </Link>
        </div>}

      {/* HINT */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h5>Need a hint?</h5>
          <button onClick={() => setHinted(!hinted)}>Hint</button>
        </div>
      </div>
      {hinted && <p className='hint'>11 units on this collection</p>}
      {/* HINT */}
    </div>
  )
}