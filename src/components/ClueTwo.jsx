import React, { useState } from "react";
import { Link } from "react-router-dom";

// The answer to this clue is 'Mini Cooper' as in regards to meghans car. 
export const ClueTwo = () => {
  const [hinted, setHinted] = useState(false)
  const [answer, setAnswer] = useState('')
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false)

  const correctAnswerOne = 'bridgett'

  const handleSubmit = () => {
    if (correctAnswerOne.toLowerCase() === answer.toLowerCase()) {
      setAnsweredCorrectly(true)
    }
  }

  return (
    <div>
      <h2>
        Congratulations on finishing your first clue!
      </h2>
      <h2>Clue #2 (M)</h2>

      <div style={styles.riddle}>
        <p>
          Color Red, Always Four
        </p>
        <p>Use Me to Explore</p>
        <p>Not All Appears as Seen</p>
        <p>Named Similarly to the Queen</p>
      </div>
      <div>
        <input placeholder='Who am I?' value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </div>
      <div style={{ marginTop: '.5em' }}>
        <button onClick={handleSubmit}>Submit Answer</button>
      </div>
      {answeredCorrectly &&
        <div>
        <h2>Well Done! Time to load up and head to the next clue...</h2>
        <Link to='/clueThree'><button>Next Clue</button></Link>
        </div>
      }
      {/* HINT */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h5>Need a hint?</h5>
            <button onClick={() => setHinted(!hinted)}>Hint</button>
            </div>
          </div>
          {hinted && <p className='hint'>This has a very specific name that M will know.</p>}
      {/* HINT */}
    </div>
  )
}

const styles = {
  stanza: {

  },
  riddle: {
    padding: '2em 0'
  }
}