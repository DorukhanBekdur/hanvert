import { useState } from "react";
import FileDropzone from "./components/FileDropzone";
import MarkdownPreview from "./components/MarkdownPreview";

function App() {
  const [file, setFile] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Hanvert</h1>
      <FileDropzone onFileSelected={setFile} />
      <MarkdownPreview file={file} />
    </div>
  );
}

export default App;
