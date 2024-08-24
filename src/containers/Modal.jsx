const Modal = ({ title, children, onClose }) => {
    return (
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <button type="button" className="close" onClick={onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;