import React from 'react'
import { useCallback, useState } from 'react'
import './App.css'
import Modal from './components/Modal'

export type Member = {
  id: number
  name: string
  age: number
}

export const members: Member[] = [
  {
    id: 1,
    name: 'taro',
    age: 20,
  },
  {
    id: 2,
    name: 'jiro',
    age: 30,
  },
  {
    id: 3,
    name: 'saburo',
    age: 40,
  },
]

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [showMember, setShowMember] = useState<Member | null>(null)

  const handleClick = useCallback((idx: number) => {
    setShowMember(members[idx])
    setIsOpenModal(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpenModal(false)
    setShowMember(null)
  }, [])

  return (
    <>
      <div className="wrapper">
        <h1>React Modal</h1>
        <ul>
          {members &&
            members.length >= 1 &&
            members.map((item, idx) => {
              return (
                <li className="member" onClick={() => handleClick(idx)}>
                  {item.name}
                </li>
              )
            })}
        </ul>
      </div>
      <Modal
        isOpen={isOpenModal}
        handleClose={handleClose}
        member={showMember}
      />
    </>
  )
}

export default App
