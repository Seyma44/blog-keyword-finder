import { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
  width: 400px;
  height: 300px;
  margin-bottom: 20px;
  resize: none;
  font-size: 16px;
`;

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState('');
  const submitText = () => {
    if (text === '') {
      toast.error('Text field is empty. Please enter some text.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: true,
      });
      return;
    }

    extractKeywords(text);
  };

  return (
    <>
      <ToastContainer />
      <div className="papers">
        <div className="paper-content">
        <Textarea 
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
        /> 
        </div>
      </div>
      <div className="paper blue" onClick={submitText}>
        <div className="top-tape"></div>
          <p>Click</p>
      </div>
    </>
  );
};
export default TextInput;
