import clsx from 'clsx'

type Prop = {
  isOpen: boolean
  handleClose: any
}

const Modal: React.FC<Prop> = ({ isOpen, handleClose }) => {
  return (
    <>
      <>
        <div className={clsx('Modal', isOpen && 'isShow')}>
          <div className="Modal_overlay"></div>
          <div className="Modal_container">
            <h2 className="Modal_container__title">Modal inner</h2>
            <p>{isOpen ? 'open' : 'close'}</p>
            <button onClick={handleClose}>close</button>
          </div>
        </div>
      </>
    </>
  )
}

export default Modal
