import { useEffect, useState } from "react";
import { marked } from "marked";

function MarkdownPreview({ file }) {
  const [convertedHtml, setConvertedHtml] = useState("");

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const html = marked.parse(text);
      setConvertedHtml(html);
    };
    reader.readAsText(file);
  }, [file]);

  if (!file) return null;

  return (
    <div className="mt-6 w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">
        Converted HTML:
      </h2>
      <div
        className="bg-white p-4 rounded shadow text-left prose max-w-none"
        dangerouslySetInnerHTML={{ __html: convertedHtml }}
      ></div>
    </div>
  );
}

export default MarkdownPreview;
