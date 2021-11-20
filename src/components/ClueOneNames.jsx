import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const ClueOneNames = () => {
  const [correctSubmission, setCorrectSubmission] = useState()
  const [chosenAnswer, setChosenAnswer] = useState()
  const [hinted, setHinted] = useState(false)
  const answers = [
    { label: 25, value: 25 },
    { label: 61, value: 61 },
    { label: 69, value: 69 },
    { label: 54, value: 54 },
  ]
  const correctAnswer = 61
  // This clue is the first letter of their names, the number in the alphabet that corresponds all added together
  // m = 13
  // a = 1
  // t = 20
  // s = 19
  // h = 8

  const handleSubmit = () => {
    if (chosenAnswer === correctAnswer) {
      setCorrectSubmission(true)
    } else setCorrectSubmission(false)
  }

  const answersCheckboxes = () => {
    return answers.map((answer, index) => (
      <label
        style={styles.box}
        key={index}
      >
        {answer.label}
        <input
          name='clueone'
          type='radio'
          defaultChecked={false}
          onChange={() => setChosenAnswer(answer.value)}
          value={answer.value}
          style={styles.radio}
        />
      </label>
    ))
  }


  return (
    <div>

      <p>Welcome, <b>M</b>eghan, <b>A</b>nnie, <b>T</b>aylor, <b>S</b>cott and <b>H</b>arry</p>

      <p>What is the correct answer?</p>

      <p style={styles.checkboxes}>
        {answersCheckboxes()}
      </p>
      <button disabled={!chosenAnswer} onClick={() => handleSubmit()}>Submit Answer</button>
      <p style={{ padding: '.5em' }}>
        {correctSubmission === false && <div style={{ color: 'red' }}>Ooopsie Woopsie. Try a different answer :)</div>}
        {correctSubmission && <p>Yeahhhh! Nice. One down, many more to go...</p>}
        <div>
          {correctSubmission && <Link to='/clueTwo'><button>Next clue!</button></Link>}
        </div>
      </p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h5>Need a hint?</h5>
          <button onClick={() => setHinted(!hinted)}>Hint</button>
        </div>
      </div>
      {hinted && <p className='hint'>Beginning of each name is bolded... Why could that be?</p>}
    </div>
  )
}

const styles = {
  checkboxes: {
    display: 'flex',
    flexDirection: 'column',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    padding: '.25em'
  },
  radio: {
    margin: '.25em'
  }
}