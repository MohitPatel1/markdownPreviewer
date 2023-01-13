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
    <div>
      <h1>Markdown Editor</h1>
          <div>
            <h2>Markdown Input </h2>
            <h2>Preview</h2>
          </div>
          <div>
            <textarea value={markdown} onChange={(e) => {updateMarkdownState(e.target.value)}} ></textarea>
            <div>
              <div dangerouslySetInnerHTML = {{__html: marked(markdown)}} ></div>
            </div>
          </div>
    </div>
  )
}

export default App
