import React from 'react'
import Logo from './assets/logo.png'
import Game from './assets/game.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './App.css'

function App() {

  return (
    <>
     <h1>E-COMMERCE</h1>
    <img src={Logo} alt="Logo Food"/>
    <Card>
      <Card.Img variant="top" src={Game}/>
      <Card.Body>
      <Card.Title>Gaming</Card.Title> 
      <Card.Text>Rp. 25.000</Card.Text>
      <Button variant="black">Order</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default App
