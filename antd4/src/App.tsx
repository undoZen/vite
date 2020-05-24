import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css'
import { Button, Empty } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Empty description="I'm so empty!"/>
        <p>Hello Vite + React!</p>
        <p>
          <Button onClick={() => setCount(count + 1)}>count is: {count}</Button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
