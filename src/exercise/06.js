// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import {red} from 'chalk'
import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  const handleSubmit = (e, isError) => {
    e.preventDefault()
    isError && onSubmitUsername(inputRef.current.value)
  }
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.

  const inputRef = React.useRef(null)
  const [username, setUsername] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const [errorText, setErrorText] = React.useState('')

  const handleChange = event => {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setErrorText(isValid ? null : 'Username must be lower case')
    setIsError(!isValid && true)
    isValid && setUsername(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {isError && (
          <p style={{backgroundColor: 'red', color: 'white', padding: '.5em'}}>
            {errorText}
          </p>
        )}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={isError}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
