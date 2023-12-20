import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState(''); // Declare a new state variable

  const handleOnChange = (event) =>{
    console.log("you clicked on change button");
    setText(event.target.value);
  }

  const handleUpCase = ()=>{
      console.log("you clicked upper case button" + text);
      let newText = text.toUpperCase();
      setText(newText);
  }

  const handleLoCase = ()=>{
    console.log("you clicked lower case button" + text);
    let newText = text.toLowerCase();
    setText(newText);
}

const handleClear = ()=>{
  console.log("you clicked clear case button");
  let newText = " ";
  setText(newText);
  window.speechSynthesis.cancel();
}

const handleSpeech = ()=>{
  console.log("you clicked speech button");
  let newText = new SpeechSynthesisUtterance();
  newText.text = text;
  window.speechSynthesis.speak(newText);
}

const handleStop = ()=>{
  console.log("you clicked on button to stop speech");
  let newText = new SpeechSynthesisUtterance();
  newText.text = text;
  window.speechSynthesis.cancel();
}

const handleCopy = () => {
  var textElement = document.getElementById('my-box');

  if (!textElement) {
    console.error("Element with ID 'my-box' not found");
    return;
  }

  const textToCopy = textElement.value;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        props.showAlert("Copied to Clipboard", "success");
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
        props.showAlert("Error copying to Clipboard", "error");
      });
  } else {
    // If Clipboard API is not supported, use a fallback method (execCommand)
    try {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      props.showAlert("Copied to Clipboard", "success");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      props.showAlert("Error copying to Clipboard", "error");
    }
  }
};

const countWords = (inputText) => {
  const trimmedText = inputText.trim();  // Trim extra spaces
  const words = trimmedText.split(/\s+/);
  return words.filter(word => word !== '').length;
};

const countCharacters = (inputText) => {
  const characters = inputText.replace(/\s/g, '');  // Exclude white spaces from character count
  return  characters.length;
};


  return (
    <>
    

    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>{props.heading}</h2>
<div className="mb-3">
  <label htmlFor="my-box" className="form-label"></label>
  <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}}
  onChange={handleOnChange} id="my-box" rows="9"></textarea>

  <button disabled = {text.length === 0} className="btn btn-primary my-2" onClick={handleUpCase} >Click for UpperCase</button>
  <button disabled = {text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleLoCase} >Click for LowerCase</button>
  <button disabled = {text.length === 0} className="btn btn-primary my-2 " onClick={handleClear} >Click to ClearBox</button>
  <button disabled = {text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleSpeech} >Click for Text to Speech</button>
  <button disabled = {text.length === 0} className="btn btn-primary my-2 " onClick={handleStop} >Click for Speech to Stop</button>
  <button disabled = {text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleCopy} >Copy Text</button>
</div>
    </div>

    <div container ="summary my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
      <h3>Your Text Summary</h3>
      <p>{countWords(text)} words and {countCharacters(text)} characters</p>
      <p>{0.008 * countCharacters(text)} minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
} 
