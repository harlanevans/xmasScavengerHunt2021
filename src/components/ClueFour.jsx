import React, { useState } from "react";
import { Link } from "react-router-dom";

// This will only be an input for the next clue from the Box from the 
// The piece of paper in the box will have a riddle or trivia for Harry and they will answer here
export const ClueFour = () => {
  const [hinted, setHinted] = useState(false)
  const [answer, setAnswer] = useState('')
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false)

  const correctAnswer = "mashing"

  //TODO The piece of paper will have a trivia about beer => 
  //! The first step in the beer-making process is mashing, in which the grist, or milled malt, is transferred to the mash tun. 
  //! Mashing is the process of combining the grist and water, also known as liquor,
  //!  and heating it to temperatures usually between 100 degrees Fahrenheit up to 170 degrees Fahrenheit.

  const handleSubmit = () => {
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setAnsweredCorrectly(true)
    }
  }
  return (
    <div>
      <h2>Clue #4 (H)</h2>
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
      {hinted &&
        <p className='hint'>
          <a href="https://beerconnoisseur.com/articles/beer-101-fundamental-steps-brewing#:~:text=Mashing-,The%20first%20step%20in%20the%20beer-making%20process%20is%20mashing%2C%20in%20which%20the%20grist%2C%20or%20milled%20malt%2C%20is%20transferred%20to%20the%20mash%20tun.%20Mashing%20is%20the%20process%20of%20combining%20the%20grist%20and%20water%2C%20also%20known%20as%20liquor%2C%20and%20heating%20it%20to%20temperatures%20usually%20between%20100%20degrees%20Fahrenheit%20up%20to%20170%20degrees%20Fahrenheit.,-Mashing%20causes%20the"
            target="_blank"
            rel="noreferrer"
          >
            Source (this will pretty much be your answer)
          </a>
        </p>
      }
      {/* HINT */}
    </div>
  )
}