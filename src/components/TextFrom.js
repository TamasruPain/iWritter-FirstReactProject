
import React, {useState} from 'react'

export default function TextFrom(props) {

    const handleUpClick = () =>{
        // console.log("Button was clicked:"+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase","success");
    }
    const handleLoClick = () =>{
        // console.log("Button was clicked:"+text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase","success");
    }
    const handleClClick = () =>{
        // console.log("Button was clicked:"+text);
        let newText= '';
        setText(newText);
        props.showAlert("Text cleard","success");
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("The Text is Coped","success");
    }
    const HandleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All the extra spaces are removed","success");
    }

    const [text, setText]= useState('Enter the text here');

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='my-4'>{props.heading}</h1>
            <h5 className='my-3'>{props.heading2}</h5>
              <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'#343a40'}} id="myBox" rows="8"></textarea>
              </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={HandleExtraSpaces}>Clear Spaces</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClClick}>Clear All</button>
       
        </div>

           
        <div className='container my-3'style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'#343a40'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter somthing to preview here"}</p>
        </div>

        </>
    )
}
