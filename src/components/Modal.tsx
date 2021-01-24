import clsx from 'clsx'
import { useCallback, useRef } from 'react'
import { Member } from '../App'

type Prop = {
  isOpen: boolean
  member: Member | null
  handleClose: any
}

const Modal: React.FC<Prop> = ({ isOpen, member, handleClose }) => {
  const overlay = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(() => {
    handleClose()
  }, [handleClose])

  return (
    <>
      <>
        {/* ここで {isOpen && <></>} とやるとフェードインできない */}
        <div className={clsx('Modal', isOpen && 'isShow')}>
          <div
            className="Modal_overlay"
            ref={overlay}
            onClick={handleClick}
          ></div>
          <div className="Modal_container">
            <h2 className="Modal_container__title">Member</h2>
            <p>name: {member?.name}</p>
            <p>age: {member?.age}</p>
            <img
              src="https://picsum.photos/id/1005/300/200"
              alt={member?.name}
            />
            <button className="Modal_container__button" onClick={handleClose}>
              close
            </button>
          </div>
        </div>
      </>
    </>
  )
}

export default Modal
