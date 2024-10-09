import { useState } from 'react';


export default function App() {
  const [isOpen, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>Modalı aç</button>
      
      {isOpen && (
        <Modal closeModal={closeModal}>
          <h1 className='pb-2 text-lg font-bold'>Modal açık</h1>
          <button onClick={closeModal}></button>
        </Modal>
      )}
    </>
  );
}

function Modal({ children, closeModal }) {
  return (
    <dialog open className='border-2 border-black p-4'>
      {children}
      <button onClick={closeModal}>Modalı Kapat</button>
    </dialog>
  );
}
