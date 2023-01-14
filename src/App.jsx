import { useState } from 'react'
import { marked } from 'marked';
import { render } from 'react-dom';

function App() {
  const [markdown, setMarkdown] = useState("");

  const updateMarkdownState = (input) => {
    setMarkdown(input);
  };

  const textAreaStyles = {
    height: "50vh"
  };

  return (
    <div className="App">
      <h1 className="text-center m-4">Markdown Editor</h1>
          <div className="flex m-2">
            <h2 className="text-center w-2/4">Markdown Input </h2>
            <h2 className="text-center w-2/4">Preview</h2>
          </div>
          <div className="flex">
            <textarea className="w-2/4 m-4 bg-green-300" value={markdown} onChange={(e) => {updateMarkdownState(e.target.value)}} ></textarea>
            <div className="w-2/4 m-4 bg-blue-300" style={textAreaStyles}>
              <div dangerouslySetInnerHTML = {{__html: marked(markdown)}} ></div>
            </div>
          </div>
    </div>
  )
}

export default App
