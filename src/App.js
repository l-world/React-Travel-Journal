import React from 'react'
import Header from "./components/Header"
// import Card from "./components/Card"
import Main from './components/Main'

export default function App() {
  return (
    <div className='container'>
        <div className="wrap">
            <Header />
            <Main />
        </div>
    </div>
  )
}
