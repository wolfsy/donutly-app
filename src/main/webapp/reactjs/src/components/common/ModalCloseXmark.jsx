import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ModalCloseXmark({ handleClose }) {
  return (
    <FontAwesomeIcon className="modal-close-xmark mt-1" 
                     icon="fa-solid fa-xmark"
                     onClick={handleClose} 
    />
  )
}

export default ModalCloseXmark