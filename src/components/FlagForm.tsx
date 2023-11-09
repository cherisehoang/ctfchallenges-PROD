import { useState } from 'react';
import SubmitButton from './SubmitButton'
import React, { useRef } from 'react';
// import challengeData from '../pages/api/data/challengeData';

interface FlagProps {
  correctFlag: string;
}

const FlagForm: React.FC <FlagProps> = ({ correctFlag }) => {
  const [answerCorrectness, setAnswerCorrectness] = useState(false);
  const userInput = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (userInput.current) {
      const inputValue = userInput.current.value;
      if (inputValue.length === correctFlag.length) {
        setAnswerCorrectness(true);
      } else {
        setAnswerCorrectness(false);
      }
    }
    setMessage('The correct answer is: ' + correctFlag);
  };
  const [message, setMessage] = useState('');

  
  return (
    <form className="my-10" onSubmit={handleSubmit}>
      <span className="mr-2">COOL&#123;</span>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-md"
        placeholder="Input your flag here"
        ref={userInput}
      />
      <span className="ml-2">&#125;</span>
      {/* <button onClick={handleSubmit}>button</button> */}
      {/* <SubmitButton onClick={handleSubmit} answerCorrectness={answerCorrectness}/> */}
      <div>
        <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm my-5 px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
        {<span>{message}</span>}
      </div>
    </form>
  );
}

export default FlagForm;
