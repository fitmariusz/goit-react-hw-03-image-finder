import css from './Modal.module.css'

export const ModalContent = ({ imgSrc, onClose }) => {
  return (
    // <div className="overlay">
    <div className={css.modal}>
      <p>test</p>
      <img src={imgSrc} alt="Test" onClick={onClose} />
      <button onClick={onClose}>Colse</button>
      </div>
    // </div> 
  );
}