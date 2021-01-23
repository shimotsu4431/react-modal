import clsx from 'clsx'
import { useCallback, useRef } from 'react'

type Prop = {
  isOpen: boolean
  handleClose: any
}

const Modal: React.FC<Prop> = ({ isOpen, handleClose }) => {
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
            <h2 className="Modal_container__title">Modal inner</h2>
            <p>モーダルの中身です</p>
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
