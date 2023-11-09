import { useState } from 'react';
import SubmitButton from './SubmitButton'
import React, { useRef } from 'react';
// import challengeData from '../pages/api/data/challengeData';

interface FlagProps {
  correctFlag: string;
}

const FlagForm: React.FC <FlagProps> = ({ correctFlag }) => {
  // const [userInput, setUserInput] = useState('');
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
  };
  // console.log(answerCorrectness);
  // console.log("user: " + userInput);
  // console.log("correct: " + correctFlag);
  // Check if the user's input matches the "flag" in challengeData

  return (
    <form className="my-10">
      <span className="mr-2">COOL&#123;</span>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-md"
        placeholder="Input your flag here"
        ref={userInput}
      />
      <span className="ml-2">&#125;</span>
      {/* <button onClick={handleSubmit}>button</button> */}
      <SubmitButton onClick={handleSubmit} answerCorrectness={answerCorrectness}/>
    </form>
  );
}

export default FlagForm;