import { useRef, useState } from "react";

const DragAndDrop = () => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  return (
    <>
      <div
        className="dropzone-main gap-4 flex flex-col"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="dropzone flex flex-col items-center justify-center">
          <img src="images/excel-icon.png" alt="excel-icon" />
          <div className="text-secondary text-sm mt-5">
            {!file ? (
              <>
                <div className="hidden md:block">
                  Drop your excel sheet here or{" "}
                  <span
                    className="text-primary cursor-pointer"
                    onClick={() => inputRef.current?.click()}
                  >
                    browse
                  </span>
                </div>
                <div className="block md:hidden">
                  Drop your excel sheet{" "}
                  <span
                    className="text-primary cursor-pointer"
                    onClick={() => inputRef.current?.click()}
                  >
                    here
                  </span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <span>{file?.name}</span>
                <div
                  className="mt-5 text-red-600 font-extrabold cursor-pointer"
                  onClick={() => setFile(null)}
                >
                  Remove
                </div>
              </div>
            )}
          </div>
        </div>

        <input
          type="file"
          //   accept=".xlsx, .xls"
          onChange={(e: any) => setFile(e.target.files[0])}
          hidden
          ref={inputRef}
        />

        <button
          className="bg-primary flex py-3 items-center justify-center rounded-md"
          onClick={() => inputRef.current?.click()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-white">Upload</span>
        </button>
      </div>
    </>
  );
};

export default DragAndDrop;
