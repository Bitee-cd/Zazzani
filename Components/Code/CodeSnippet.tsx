// Import the necessary modules
import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/default.css";

// Define the CardProps interface
interface Props {
  codeprop?: string; // Optional prop
  languageprop?: string; // Optional prop
}

// Define the Card functional component
const CodeSnippet = ({
  languageprop = "javascript",
  codeprop = 'console.log("Hello, World!");',
}: Props) => {
  const [code, setCode] = useState<string>(codeprop);
  const [language, setLanguage] = useState<string>(languageprop);
  const [copied, setCopied] = useState<boolean>(false);
  const codeBlockRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Update code and language state when props change
    setCode(codeprop);
    setLanguage(languageprop);
  }, [codeprop, languageprop]);

  useEffect(() => {
    // Highlight code using Highlight.js when component mounts
    if (codeBlockRef.current) {
      hljs.highlightBlock(codeBlockRef.current);
    }
  }, [code]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code); // copy text to clipboard
    setCopied(true); // set copied state to true
    setTimeout(() => {
      setCopied(false); // reset copied state after 2 seconds
    }, 2000);
  };

  return (
    <div className="lg:w-[50%] mx-auto bg-[#e3e3e3] rounded-lg">
      <div className=" flex justify-between w-full px-2">
        <span className="amber-red">{language}</span>
        <button
          onClick={handleCopyClick}
          className="copy-button px-2 py-1 rounded-lg"
        >
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <pre className="p-5">
        <code ref={codeBlockRef} className={`language-${language} `}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
