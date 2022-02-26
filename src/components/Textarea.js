import React, { useState } from 'react'

export default function Textarea(props) {

    const [text, setText] = useState('');

    const textToUpper = () => {
        const upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted To Upper Case", "success");
    }
    const textToLower = () => {
        const lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted To Lower Case", "success");
    }
    const capitalizeText = () => {
        const arr = text.split(/\s+/);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
        const str2 = arr.join(" ");
        setText(str2);
        props.showAlert("Converted To Capitalized", "success");
    }
    const clearText = () => {
        setText('');
        props.showAlert("Text Cleared", "success");
    }
    const ChangedText = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="form-group">
                <div className="container mt-5">
                    <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.title}</h2>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={ChangedText} id="exampleFormControlTextarea1" rows="5"></textarea>
                    <button type="button" className="btn btn-primary mt-3 mr-3" onClick={textToUpper} >TextCapital</button>
                    <button type="button" className="btn btn-primary mt-3 mr-3" onClick={textToLower} >TextLower</button>
                    <button type="button" className="btn btn-primary mt-3 mr-3" onClick={capitalizeText} >TextCapitalize</button>
                    <button type="button" className="btn btn-primary mt-3 mr-3" onClick={clearText} >ClearText</button>
                    <p className={`text-${props.mode === 'light' ? 'dark' : 'light'} mt-3`}><strong>Text Count :</strong> {text.length} <strong className='ml-2'>Character Count :</strong> {text.split(/\s+/).filter(function (n) { return n !== '' }).length}</p>
                </div>
            </div>
        </>
    )
}
