import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleClick = useCallback(() => {
    alert(isOpenModal)
    setIsOpenModal(true)
  }, [isOpenModal])

  return (
    <div className="wrapper">
      <h1>React Modal</h1>
      <button onClick={handleClick}>open modal</button>
    </div>
  )
}

export default App
