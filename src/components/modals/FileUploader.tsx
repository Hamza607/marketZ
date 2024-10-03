import Image from "next/image";
import { useState, useRef } from "react";
import attach from "@/components/assets/images/attach.png";
import { IoClose } from "react-icons/io5";

const FileUploader: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles([...files, ...selectedFiles]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleClickToUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col  mt-10">
      <div
        className="border border-dashed border-gray-400 p-6 rounded-lg cursor-pointer w-full flex justify-center items-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClickToUpload}
      >
        <label htmlFor="fileInput" className="text-gray-600 cursor-pointer">
          Click to select file
        </label>
      </div>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileInputChange}
        multiple
        ref={fileInputRef}
      />
      <div className="my-2">
        <p> {files.length} Files Selected</p>
        {files.length > 0 && (
          <div>
            {files.map((file, index) => (
              <div key={index} className="mb-2">
                <p className="mt-2 text-gray-600 flex gap-2 items-center border border-gray-200 p-2 my-2">
                  {" "}
                  <Image src={attach} alt="" width={20} height={20} />{" "}
                  {file.name}
                  <IoClose
                    className="cursor-pointer"
                    onClick={() => handleRemoveFile(index)}
                  />
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* {files.length > 0 && (
        <button
          onClick={handleUpload}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Upload
        </button>
      )} */}
    </div>
  );
};

export default FileUploader;
