import React from "react";
import {marked} from 'marked'
// let marked = require("marked");
// console.log(typeof(marked))
// console.log(marked)

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      markdown: ""
    }
  }

  updateMarkdownState = (markdown) => {
    this.setState({markdown: markdown})
  }
  
  render(){
    
    let textAreaStyles = {
      height :"50vh"
    }
    return (
      <div className="App">
          <h1 className="text-center m-4">Markdown Editor</h1>
          <div className="flex m-2">
            <h2 className="text-center w-2/4">Markdown Input </h2>
            <h2 className="text-center w-2/4">Preview</h2>
          </div>
          <div className="flex">
            <textarea className="w-2/4 m-4 bg-green-300" value={this.state.markdown} onChange={(e) => {this.updateMarkdownState(e.target.value)}} style={textAreaStyles}></textarea>
            <div className="w-2/4 m-4 bg-blue-300" style={textAreaStyles}>
              <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
            </div>
            <div>{console.log(marked(this.state.markdown))}</div>
          </div>
      </div>
    );
  }
}
