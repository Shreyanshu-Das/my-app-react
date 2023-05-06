import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was Clicked" + text);
        let  newText = text.toUpperCase();
        setText(newText);
        props.showAlert("change to upper case", "success");
    }
    const handleLoClick = ()=>{
        console.log("UpperCase was Clicked" + text);
        let  newText = text.toLowerCase();
        setText(newText);
        props.showAlert("change to lower case", "success");
    }
    const handleOnChange = (event)=>{
        console.log("Onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="12"></textarea>
            </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length}words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length}mins read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
        </div>
        </>
    )
}
