import { useState } from "react";
import FileDropzone from "./components/FileDropzone";

function App() {
  const [file, setFile] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Hanvert</h1>
      <FileDropzone onFileSelected={setFile} />
      {file && (
        <div className="mt-4 bg-white p-4 rounded shadow-md text-gray-800">
          <p>
            <strong>Selected File:</strong> {file.name}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
