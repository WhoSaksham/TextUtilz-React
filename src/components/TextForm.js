import React, { useState } from "react";

export default function TextForm(props) {

  const clear = () => {
    setText("");
    props.getAlert('Cleared');
  };

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.getAlert('Converted to UpperCase');
  };

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.getAlert('Converted to LowerCase');

  };

  const clipboard = () => {
    let text = document.getElementById('exampleFormControlTextarea1')
    // text.select();
    navigator.clipboard.writeText(text.value)
    props.getAlert('Copied to Clipboard');

  };

  const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.getAlert('Extra spaces removed');

  };

  const onchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className="mt-3">{props.heading}</h1>
        <div className="mt-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={onchange}
            rows="9"
          ></textarea>
        </div>
        <p className="mt-2">
          Total <b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> Words and <b>{text.length}</b>{" "}
          Characters, Estimated <strong>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</strong> mins read
        </p>
        <button disabled={text.length > 0 ? false : true} className="btn btn-primary mx-2" onClick={clear}>
          Clear
        </button>
        <button disabled={text.length > 0 ? false : true} className="btn btn-primary mx-2" onClick={upperCase}>
          Convert to UPPERCASE Text
        </button>
        <button disabled={text.length > 0 ? false : true} className="btn btn-primary mx-2" onClick={lowerCase}>
          Convert to lowercase Text
        </button>
        <button disabled={text.length > 0 ? false : true} className="btn btn-primary mx-2" onClick={extraSpace}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length > 0 ? false : true} className="btn btn-primary mx-2" onClick={clipboard}>
          Copy to Clipboard
        </button>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className="mt-4">Preview</h1>
        <p>{text.length > 0 ? text : 'Nothing to Preview'}</p>
      </div>
    </>
  );
}
