import React from 'react'
import { useCallback, useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleClick = useCallback(() => {
    setIsOpenModal(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpenModal(false)
  }, [])

  return (
    <>
      <div className="wrapper">
        <h1>React Modal</h1>
        <button onClick={handleClick}>open modal</button>
      </div>
      <Modal isOpen={isOpenModal} handleClose={handleClose} />
    </>
  )
}

export default App
