import React, { useState } from 'react';
import { setDescription } from '../../../../features/project/projectSlice';
import { useDispatch } from 'react-redux';

const TextEditor = () => {
  const dispatch = useDispatch();


  const [text, setText] = useState('');
  const [lines, setLines] = useState([]);
  const [foldedLines, setFoldedLines] = useState([]);

  const handleTextChange = (event) => {
    const enteredText = event.target.value;
    const sanitizedText = enteredText.replace(/ /g, '\u00A0'); // Replace spaces with non-breaking spaces
    setText(sanitizedText);

    // Split the sanitized text into lines, including empty lines
    const enteredLines = sanitizedText.split('\n');
    setLines(enteredLines);

    
    dispatch(setDescription(enteredLines))
  };

  const handleLineFold = (lineIndex) => {
    if (foldedLines.includes(lineIndex)) {
      setFoldedLines(foldedLines.filter((index) => index !== lineIndex));
    } else {
      setFoldedLines([...foldedLines, lineIndex]);
    }
  };

  return (
    <div className="text-editor">
      <textarea value={text} onChange={handleTextChange} className='border-2 border-gray-300 rounded-xl w-full' name="" id="" cols="30" rows="10" placeholder="Good descriptions include the following elements:
                            1) Your client's goal for the project
                            2) Details about your contribution to the project
                            3) A summary of the project's success
                            " />
      <ul>
        {lines.map((line, index) => (
          <li
            key={index}
            className={foldedLines.includes(index) ? 'folded' : ''}
            onClick={() => handleLineFold(index)}
          >
            {line || '\u00A0'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextEditor;
