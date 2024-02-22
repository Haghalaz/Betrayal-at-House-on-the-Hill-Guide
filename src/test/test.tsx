// src/TextInterpreter.js
import React, { useState } from 'react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';

const TextInterpreter = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [interpretedText, setInterpretedText] = useState('');

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);

    Tesseract.recognize(imageSrc, 'eng', { logger: (m) => console.log(m) }).then(({ data: { text } }) => {
      setInterpretedText(text);
    });
  }, [webcamRef]);

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture</button>
      {capturedImage && <img src={capturedImage} alt="Captured" />}
      {interpretedText && (
        <div>
          <h2>Interpreted Text:</h2>
          <p>{interpretedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextInterpreter;
