import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from './components/Post'
import './App.css'

function App() {
  return (
    <main>
      <Post author="Maximilian" body="React.js is awesome!" />
      <Post author="Manuel" body="Check out the full course!" />
    </main>
  );
}

export default App
