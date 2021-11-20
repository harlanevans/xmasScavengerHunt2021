import React, {useState} from "react";
import { Link } from "react-router-dom";


// Take them to 7 11 down the road - They will have to ask the clerk for the box that has the next clue.
export const ClueThree = () => {
  const [hinted, setHinted] = useState(false)


  return (
    <div>
      <h2>Clue #3</h2>
      <br />
      <p>Oh, Thank Heavens!</p>
      <p>Never What You Want, but Always There When You Need</p>
      <p>o<b>K</b> Impressions</p>
      <p>You'll Leave with a Treat Guaranteed</p>
      <p>Typically stacked with Obsessions</p>
      <p>Say Hello to Proceed</p>
      <br />
      <br />
      <div >
        <p>Have your next clue?</p>
        <Link to='/clueFour'><button>Click here!</button></Link>
      </div>
      {/* HINT */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h5>Need a hint?</h5>
            <button onClick={() => setHinted(!hinted)}>Hint</button>
            </div>
          </div>
          {hinted && <p className='hint'>This location is on the <b>3rd</b> <b>st</b>anza</p>}
      {/* HINT */}
    </div>
  )
}