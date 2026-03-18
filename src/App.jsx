import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div>
      <h1> Welcome to my react</h1>
      <form className='form' centered ="true">
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default App