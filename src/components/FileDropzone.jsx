import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function FileDropzone({ onFileSelected }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileSelected(acceptedFiles[0]);
      }
    },
    [onFileSelected]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="w-full max-w-md p-8 border-2 border-dashed border-gray-400 rounded-lg text-center transition hover:border-blue-500 cursor-pointer bg-white"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-600">Drop the file here...</p>
      ) : (
        <p className="text-gray-600">
          Drag & drop a file here, or click to select one
        </p>
      )}
    </div>
  );
}

export default FileDropzone;
