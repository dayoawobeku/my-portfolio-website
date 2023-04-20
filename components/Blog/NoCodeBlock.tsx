import {useState} from 'react';

interface CodeSegment {
  text: string;
  color: string;
}

interface CodeBlockProps {
  codeSegments: CodeSegment[];
  filename?: string;
}

export default function CodeBlock({codeSegments, filename}: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(
        codeSegments.map(({text}) => text).join(''),
      );
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy the code', err);
    }
  };

  return (
    <div className="my-6">
      {filename && (
        <p className="rounded-t-md border border-b-0 border-grey-800 py-3 px-6 text-[0.875rem] text-white">
          {filename.toLowerCase()}
        </p>
      )}
      <div className="relative">
        <button
          onClick={handleCopyClick}
          className="absolute top-2 right-2 rounded bg-gray-600 py-1 px-2 text-[10px] font-medium text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
        <pre
          className={`overflow-auto whitespace-pre rounded bg-black p-6 text-white ${
            filename ? 'rounded-t-none' : ''
          }`}
        >
          <code className="whitespace-pre text-start text-[0.875rem] text-white-800">
            {codeSegments.map(({text, color}, index) => (
              <span key={index} style={{color}}>
                {text}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
