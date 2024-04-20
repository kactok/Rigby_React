import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export default function Modal({ children, open, className, onClose }) {
  const modalRef = useRef();
  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [open]);
  return createPortal(
    <dialog ref={modalRef} className={className} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
