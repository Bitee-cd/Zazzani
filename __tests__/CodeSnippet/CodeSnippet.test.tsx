import React from "react";
import { render } from "@testing-library/react";
import CodeSnippet from "../../Components/Code/CodeSnippet";
import hljs from "highlight.js/lib/core";

describe("CodeSnippet component", () => {
  it("renders code with default props correctly", () => {
    const { getByText } = render(<CodeSnippet />);
    expect(getByText('console.log("Hello, World!");')).toBeInTheDocument();
    expect(getByText("javascript")).toBeInTheDocument();
  });

  it("renders code with custom props correctly", () => {
    const code = "const message = 'Hello, World!';";
    const language = "typescript";
    const { getByText } = render(
      <CodeSnippet codeprop={code} languageprop={language} />
    );
    expect(getByText(code)).toBeInTheDocument();
    expect(getByText(language)).toBeInTheDocument();
  });

  it("highlights code on mount", () => {
    let lastHighlightedBlock;
    const mockHighlightBlock = jest.fn((block) => {
      lastHighlightedBlock = block;
    });
    const mockRef = { current: {} };
    jest.spyOn(React, "useRef").mockReturnValue(mockRef);
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    jest.spyOn(hljs, "highlightBlock").mockImplementation(mockHighlightBlock);
    render(<CodeSnippet />);
    console.log(mockRef.current);
    expect(lastHighlightedBlock.innerHTML).toContain("console.log");
  });

  it("copies code to clipboard and shows copied message", async () => {
    const code = "const message = 'Hello, World!';";
    const { getByText } = render(<CodeSnippet codeprop={code} />);
    const button = getByText("Copy Code");
    if (navigator.clipboard) {
      jest.spyOn(navigator.clipboard, "writeText").mockResolvedValue();
      button.click();
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(code);
      expect(getByText("Copied!")).toBeInTheDocument();
      jest.useFakeTimers();
      await new Promise((r) => setTimeout(r, 2000));
      jest.runAllTimers();
      expect(getByText("Copy Code")).toBeInTheDocument();
    }
  });
});
