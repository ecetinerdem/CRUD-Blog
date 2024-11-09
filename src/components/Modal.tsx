const Modal: React.FC<{ children: React.ReactNode; onclose: () => void }> = ({
  children,
  onclose,
}) => {
  return (
    <div className=" fixed inset-0 bg-black bg-opacity flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow relative">
        {children}
        <button
          onClick={onclose}
          className=" absolute top-2 right-2 text-gray500"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
