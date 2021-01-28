import clsx from 'clsx'
import { useCallback, useEffect, useRef } from 'react'
import { useLockBodyScroll } from 'react-use'
import { Member } from '../App'

type Prop = {
  isOpen: boolean
  member: Member | null
  handleClose: any
}

const Modal: React.FC<Prop> = ({ isOpen, member, handleClose }) => {
  const overlay = useRef<HTMLDivElement>(null)
  useLockBodyScroll(isOpen)

  const handleClick = useCallback(() => {
    handleClose()
  }, [handleClose])

  // Esc キーでモーダルを閉じる
  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose],
  )

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)
  }, [escFunction])

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
